import requests
from bs4 import BeautifulSoup

url = 'https://www.bls.gov/regions/mid-atlantic/data/averageretailfoodandenergyprices_usandwest_table.htm'
page = requests.get(url)
soup = BeautifulSoup(page.content, 'html.parser')

# Find the table containing the data

food = soup.find_all('p', class_='sub1')
# Extract the rows from the table
for i in food:
    print(i.text)

    food2 = soup.find_all('p', class_='sub2')
# Extract the rows from the table
for i in food2:
    print(i.text)

