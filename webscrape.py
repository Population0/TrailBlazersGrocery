import requests
from bs4 import BeautifulSoup

url = 'https://www.numbeo.com/food-prices/country_result.jsp?country=United+States'
page = requests.get(url)
soup = BeautifulSoup(page.content, 'html.parser')

# Find the table containing the data
prices = soup.find_all('span', class_='first_currency')
# Extract the rows from the table
for i in prices:
    print(i.text)

food = soup.find(id='tbody')
names = food.find_all('td')

for i in food:
    print(i.txt)