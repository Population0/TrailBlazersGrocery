import requests
from bs4 import BeautifulSoup

url = 'https://www.numbeo.com/food-prices/country_result.jsp?country=United+States'
page = requests.get(url)
soup = BeautifulSoup(page.content, 'html.parser')




