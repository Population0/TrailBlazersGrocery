import requests
from bs4 import BeautifulSoup
import pandas as pd

url = 'https://www.numbeo.com/food-prices/country_result.jsp?country=United+States'
page = requests.get(url)
soup = BeautifulSoup(page.content, 'html.parser')

# Find the table containing the data
prices = soup.find_all('span', class_='first_currency')
# Extract the rows from the table
for i in prices:
    print(i.text)
table = soup.find('table', {'class': 'data_wide_table'})

# Extract the text contents of the first column of each row
#products = [row.find('td', {'class': 'first'}).text for row in rows]

#print(products)

tables = pd.read_html(url)
arr = (tables[2][0])
for i in arr:
    print(i)
