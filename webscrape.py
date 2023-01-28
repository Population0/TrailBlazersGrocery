import requests
from bs4 import BeautifulSoup

url = "http://www.comparegroceryprices.org/search/data/comparison.shtml"

response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")

products = soup.find_all("td", {"class": "list"})
for product in products:
    name = product.find("a").text
    walmart_price = product.find("td", {"class": "walmart"}).text
    print(name, walmart_price)
