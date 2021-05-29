from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from bs4 import BeautifulSoup
from time import sleep
import csv

print('- Finish importing package')

#Open Chrome and go to Shopee's link
driver = webdriver.Chrome()
url = "https://shopee.vn/"
driver.get(url)
sleep(2)

#Search for the items 
search_field = driver.find_element_by_xpath("/html/body/div[1]/div/div[2]/div[1]/div/div[2]/div/div[1]/div[1]/div/form/input")
search_query = input("What items are you looking for? ")
search_field.send_keys(search_query)
search_field.send_keys(Keys.RETURN)
sleep(1)

#Scrape links to items
def GetURL():
    page_source = BeautifulSoup(driver.page_source, features="html.parser")
    items = page_source.find_all('a', attrs={'data-sqe': 'link'})
    all_item_url = []
    for item in items:
        link_item = "https://shopee.vn/" + item.get('href')
        if link_item not in all_item_url:
            all_item_url.append(link_item)
    return all_item_url

links_all_pages = []
number_of_page = int(input("How many pages do you want to scrape? "))
for page in range(number_of_page):
    links_one_page = GetURL()
    driver.execute_script("window.scrollTo({ left: 0, top: document.body.scrollHeight/2, behavior: 'smooth'});")
    sleep(2)
    driver.execute_script("window.scrollTo({ left: 0, top: document.body.scrollHeight, behavior: 'smooth'});")
    sleep(2)
    links_one_page = GetURL()
    next_btn = driver.find_element_by_class_name("shopee-icon-button--right ")
    next_btn.click()
    links_all_pages = links_all_pages + links_one_page
    sleep(1)

with open('shopee.csv', 'w', newline='', encoding="utf-8") as file_output:
    headers = ['Name Item', 'Number of Reviews', 'Price', 'Quantity sold']
    writer = csv.DictWriter(file_output, delimiter=',',lineterminator='\n', fieldnames=headers)
    writer.writeheader()

    for link in links_all_pages:
        driver.get(link)
        sleep(1.5)
        page_source = BeautifulSoup(driver.page_source, features="html.parser")
        name = ''
        price = ''
        quantity = ''
        adjust = ''
        #Get name item
        name_item = page_source.find_all('div', {'class': 'attM6y'})
        for item in name_item:
            name += item.find('span').get_text()
            print("Tên sản phẩm: ", name)
            break

        #Get number of reviews
        adjust_item = page_source.find_all('div', {'class': 'flex _3A3c6_'})
        for item in adjust_item:
            adjust = item.find('div', {'class': 'OitLRu'}).get_text()
        print("Số lượng đánh giá: ", adjust)

        #Get price
        price_item = page_source.find_all('div', {'class': 'flex items-center'})
        for item in price_item:
            price = item.find('div', {'class': '_3e_UQT'}).get_text()
            break
        print("Giá sản phẩm: ", price)


        #Get quantity sold
        sold_number = page_source.find_all('div', {'class': 'flex _210dTF'})
        for item in sold_number:
            quantity = item.find('div').get_text()
            print("Số lượng đã bán: ", quantity)
            break
        writer.writerow({headers[0]: name, headers[1]: adjust, headers[2]: price, headers[3]: quantity})
        sleep(1)