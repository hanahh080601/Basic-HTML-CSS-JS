import numpy as np
from matplotlib import pyplot as plt
from matplotlib import image as implt
import cv2 

'''
#tao ma tran toan 0
zero_matrix = np.zeros((4,3))
print(zero_matrix)

#tao ma tran toan 1
one_matrix = np.ones((4,3))
print(one_matrix)

#tao ma tran random
random_matrix = np.random.rand(4,3)
print(random_matrix)

#tao ma tran voi 1 so co dinh (vd: 20)
const_matrix = np.full((4,3), 20)
print(const_matrix)

#ep kieu
from_list = np.array(
    [
        [1,2,3],
        [4,5,6]
    ]
)
print(from_list)

from_list1 = np.array([1,2,3,4,5,6,7,8,9])
print(from_list1.reshape(3,3))

#tinh sum theo chieu doc : axis = 0, chieu ngang: axis = 1
print(np.sum(one_matrix, axis=1))

#cong, tru, nhan, chia,...
tmp = one_matrix + 1
print(tmp)

tmp_multi = random_matrix.dot(from_list1.reshape(3,3))

#chuyen vi
tmp2 = from_list.reshape(3,3).T
print(tmp2)
'''


'''
print(blue_channel)
cv2.imshow("red_chanel", red_channel)
cv2.imshow("green_chanel", green_channel)
cv2.imshow("blue_chanel", blue_channel)
cv2.waitKey(10000)
'''

img = cv2.imread("img.png")
plt.figure(figsize=(12,6))
plt.suptitle("Convert RGB(1) to GrayScale(2) and Black-White(3)")

def to_grayscale(img):
    R, G, B = img[:, :, 0], img[:, :, 1], img[:, :, 2]
    imgGray = img.copy()
    for i in range(3):
        imgGray[:, :, i] = 0.2989 * R + 0.5870 * G + 0.1140 * B
    return imgGray

threshold = 80


def to_bw(img):
    R, G, B = img[:, :, 0], img[:, :, 1], img[:, :, 2]
    avg = np.array(R > threshold) * 255/48 + np.array(G > threshold) * 23*255/24 + np.array(B > threshold) * 255/48
    #avg1 = np.array(R <= threshold) * 0 + np.array(G <= threshold) * 0 + np.array(B <= threshold) * 0
    ans = img.copy()
    for i in range(3):
        ans[:, :, i] = avg #+ avg1
    return ans

plt.subplot(1, 3, 1)
plt.imshow(img)
plt.subplot(1, 3, 2)
gray = to_grayscale(img)
plt.imshow(gray)
plt.subplot(1, 3, 3)
bw = to_bw(img)
plt.imshow(bw)
plt.show()