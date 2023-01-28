import requests
from bs4 import BeautifulSoup
import pandas as pd

#dataset to be used
url = 'https://www.numbeo.com/food-prices/country_result.jsp?country=United+States'
page = requests.get(url)
#grab all the html from website
soup = BeautifulSoup(page.content, 'html.parser')

#add all prices to prices array
prices = soup.find_all('span', class_='first_currency')
for i in prices:
    print(i.text)
#retrieve table values from website
tables = pd.read_html(url)
#add all food names from first coloumn of table to name array
name = (tables[2][0])
for i in name:
    print(i)
