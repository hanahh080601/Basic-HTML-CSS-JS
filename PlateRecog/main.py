import numpy as np
import cv2
import  imutils
from matplotlib import pyplot as plt
import pytesseract as tess
tess.pytesseract.tesseract_cmd = r'C:\Users\PC\AppData\Local\Programs\Tesseract-OCR\tesseract.exe'

img = cv2.imread('bsx.jpg')
plt.imshow(img)
gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)
# plt.imshow(cv2.cvtColor(gray, cv2.COLOR_BGR2RGB))

bfilter = cv2.bilateralFilter(gray, 11, 17, 17) #Noise reduction
edged = cv2.Canny(bfilter, 30, 200) #Edge detection
plt.imshow(cv2.cvtColor(edged, cv2.COLOR_BGR2RGB))

keypoints = cv2.findContours(edged.copy(), cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
contours = imutils.grab_contours(keypoints)
contours = sorted(contours, key=cv2.contourArea, reverse=True)[:10]

location = None
for contour in contours:
    approx = cv2.approxPolyDP(contour, 10, True)
    if len(approx) == 4:
        location = approx
        break

print(location)
mask = np.zeros(gray.shape[:2],  dtype=np.uint8)
new_image = cv2.drawContours(mask, [location], 0, 255, -1, )
new_image = cv2.bitwise_and(img, img, mask=mask)
plt.imshow(cv2.cvtColor(new_image, cv2.COLOR_BGR2RGB))

(x,y) = np.where(mask==255)
(x1, y1) = (np.min(x), np.min(y))
(x2, y2) = (np.max(x), np.max(y))
cropped_image = gray[x1:x2+1, y1:y2+1]
cropped_image = cv2.resize(cropped_image, (180, 70))
cv2.imwrite('cropped.jpg', cropped_image)
#plt.imshow(cv2.cvtColor(cropped_image, cv2.COLOR_BGR2RGB))


img_cut = cv2.imread('cropped.jpg')
if img_cut.shape[1] / img_cut.shape[0] > 3:
    crop_img = cv2.resize(img_cut, (600, 200))
else:
    crop_img = cv2.resize(img_cut, (400, 200))
gray_cut = cv2.cvtColor(img_cut, cv2.COLOR_BGR2GRAY)
#plt.imshow(cv2.cvtColor(gray_cut, cv2.COLOR_BGR2RGB))

bfilter_cut = cv2.bilateralFilter(gray_cut, 11, 17, 17) #Noise reduction
edged_cut = cv2.threshold(bfilter_cut, 0, 80, cv2.THRESH_OTSU)[1] #Edge detection
#plt.imshow(cv2.cvtColor(edged_cut, cv2.COLOR_BGR2RGB))

keypoints_cut = cv2.findContours(edged_cut.copy(), cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)
contours_cut = imutils.grab_contours(keypoints_cut)
contours_cut = sorted(contours_cut, key=lambda ctr: cv2.boundingRect(ctr)[0] + cv2.boundingRect(ctr)[1] * 10)

#Cách 1: Chỉ dùng findContours => tìm ra các kí tự trên biển số
count = 0
for cnt_num in contours_cut:
    area =cv2.contourArea(cnt_num)
    if area <= 1200 and area >= 300:
        x,y,w,h = cv2.boundingRect(cnt_num)
        img_cut = cv2.rectangle(img_cut, (x, y), (x + w, y + h), (0, 0, 255), 1)
        ROI = img_cut[y:y+h, x:x+w]
        cv2.imwrite(r'pic\pic_{}.jpg'.format(count), ROI)
        count += 1

plt.imshow(img_cut)
plt.show()

'''
#Cách 2: dùng pytesseract để nhận diện chữ số => image_to_box để khoanh vùng, crop

scale_percent = 500  # percent of original size
width = int(img_cut.shape[1] * scale_percent / 100)
height = int(img_cut.shape[0] * (scale_percent + 230) / 100)
dim = (width, height)
img_cut = cv2.resize(img_cut, dim, interpolation=cv2.INTER_AREA)
hImg, wImg = img_cut.shape[:2]
boxes = tess.image_to_boxes(img_cut)
count = 0
for box in boxes.splitlines():
    #print(box)
    box = box.split(' ')
    print(box)
    x,y,w,h = int(box[1]), int(box[2]), int(box[3]), int(box[4])
    print(hImg, wImg, x,y,w,h)
    cv2.rectangle(img_cut, (x, hImg-y), (w, hImg-h), (0,255,0), 3)
    cropped_num = img_cut.copy()
    cropped_num = cropped_num[(hImg-h):(hImg-y),x:w] #HẾT bug chỗ này nè alooo
    cv2.imwrite(r'pic\pic_{}.jpg'.format(count), cropped_num)
    count += 1
'''



