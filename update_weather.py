#!/usr/bin/env python3
import requests
from bs4 import BeautifulSoup
import re
from datetime import datetime
import time
import sys

# Station page (Sylhet)
URL = "https://live6.bmd.gov.bd/bmd_web/weather-condition/web.php?view=web&stCode=41891&lang=EN"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (compatible; GitHub Actions; +https://github.com)"
}

RETRY = 3
TIMEOUT = 10

def fetch_soup(url):
    for attempt in range(1, RETRY+1):
        try:
            resp = requests.get(url, headers=HEADERS, timeout=TIMEOUT)
            resp.raise_for_status()
            return BeautifulSoup(resp.text, "html.parser")
        except Exception as e:
            if attempt == RETRY:
                raise
            time.sleep(2)
    raise RuntimeError("Failed to fetch page")

def get_text_by_id(soup, id_):
    tag = soup.find("text", {"id": id_})
    return tag.get_text(strip=True) if tag else "N/A"

def build_md(soup):
    now = datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC")
    temp_now = get_text_by_id(soup, "tempDrybulb")
    temp_min = get_text_by_id(soup, "tempMin")
    temp_max = get_text_by_id(soup, "tempMax")
    humidity = get_text_by_id(soup, "Humidity")
    rainfall = get_text_by_id(soup, "Rainfall")
    wind = get_text_by_id(soup, "wind_speed")
    condition = get_text_by_id(soup, "WeatherCondition")

    md = f"""### Sylhet Weather (Source: [BMD]({URL}))

_Updated: {now}_

- 🌡️ **Current Temp:** {temp_now}
- 🔻 **Min Temp:** {temp_min}
- 🔺 **Max Temp:** {temp_max}
- 💧 **Humidity:** {humidity}
- 🌧️ **Rainfall:** {rainfall}
- 💨 **Wind:** {wind}
- 🌥️ **Condition:** {condition}
"""
    return md

def update_readme(md, path="README.md"):
    try:
        with open(path, "r", encoding="utf-8") as f:
            content = f.read()
    except FileNotFoundError:
        content = ""

    pattern = re.compile(r'<!-- WEATHER-START -->(.*?)<!-- WEATHER-END -->', re.DOTALL)

    block = f"<!-- WEATHER-START -->\n{md}\n<!-- WEATHER-END -->"

    if pattern.search(content):
        new_content = pattern.sub(block, content)
    else:
        # Append at the end if markers not present
        if content and not content.endswith("\n"):
            content += "\n"
        new_content = content + "\n" + block + "\n"

    with open(path, "w", encoding="utf-8") as f:
        f.write(new_content)

def main():
    soup = fetch_soup(URL)
    md = build_md(soup)
    update_readme(md)
    print("README updated with weather data.")

if __name__ == "__main__":
    main()
