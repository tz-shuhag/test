import requests
from bs4 import BeautifulSoup

URL = "https://live6.bmd.gov.bd/map/7"
response = requests.get(URL)
soup = BeautifulSoup(response.text, "html.parser")

# Example parsing (adjust selectors based on actual site)
max_temp = "32"   # parse actual value
min_temp = "24"
humidity = "82"
rainfall = "5"

# Read README.md
with open("README.md", "r", encoding="utf-8") as f:
    readme = f.read()

# Replace placeholders
readme = readme.replace("<!--MAX_TEMP-->", max_temp)
readme = readme.replace("<!--MIN_TEMP-->", min_temp)
readme = readme.replace("<!--HUMIDITY-->", humidity)
readme = readme.replace("<!--RAINFALL-->", rainfall)

# Save changes
with open("README.md", "w", encoding="utf-8") as f:
    f.write(readme)
