import requests
from bs4 import BeautifulSoup

url = "http://www.comparegroceryprices.org/search/data/comparison.shtml"

response = requests.get(url)
beautifulsoup = BeautifulSoup(response.text, "html.parser")

results=beautifulsoup.find("tbody")
food=results.find("td", width_="191")
print(food)
print(food.text)