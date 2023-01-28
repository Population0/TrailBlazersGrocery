import requests
from bs4 import BeautifulSoup
import pandas as pd
import json

#dataset to be used
url = 'https://www.numbeo.com/food-prices/country_result.jsp?country=United+States'
page = requests.get(url)
#grab all the html from website
soup = BeautifulSoup(page.content, 'html.parser')

#add all prices to prices array
prices = soup.find_all('span', class_='first_currency')

#retrieve table values from website
tables = pd.read_html(url)
#add all food names from first coloumn of table to name array
name = (tables[1][0])

# create new list
lst = list()
# append foods and corresponding prices in alternating order
for i in range(14):
    lst.append(name[i])
    lst.append(prices[i].text[0:-2])
# convert list to dictionary
dct = {lst[i]: lst[i + 1] for i in range(0, len(lst), 2)}

# Create outfile
with open("sample.json", "w") as outfile:
        json.dump(dct, outfile)