import requests
from bs4 import BeautifulSoup
import re

URL = "https://live6.bmd.gov.bd/bmd_web/weather-condition/web.php?view=web&stCode=41891&lang=EN"

def get_weather():
    r = requests.get(URL)
    soup = BeautifulSoup(r.text, "html.parser")

    # Find the SVG where weather info lives
    svg = soup.find("svg")

    if not svg:
        return None

    data = {}

    # Extract values by their IDs
    def get_text(id_):
        tag = svg.find("text", {"id": id_})
        return tag.text.strip() if tag else None

    data["temp"] = get_text("tempDrybulb")
    data["min_temp"] = get_text("tempMin")
    data["max_temp"] = get_text("tempMax")
    data["humidity"] = None

    # Humidity text is next to <text id="labelRH">
    label_rh = svg.find("text", {"id": "labelRH"})
    if label_rh and label_rh.find_next("text"):
        data["humidity"] = label_rh.find_next("text").text.strip()

    # Rainfall is inside WeatherCondition text (sometimes included)
    weather_condition = svg.find("text", {"id": "WeatherCondition"})
    if weather_condition:
        txt = weather_condition.text.strip()
        if "Rain" in txt:
            data["rainfall"] = txt
        else:
            data["rainfall"] = "No rainfall"

    return data

def update_readme(data):
    with open("README.md", "r", encoding="utf-8") as f:
        content = f.read()

    # Replace section between markers
    new_section = (
        "### 🌤 Sylhet Weather (BMD)\n"
        f"- 🌡 Current: {data['temp']}\n"
        f"- 🌡 Min: {data['min_temp']}\n"
        f"- 🌡 Max: {data['max_temp']}\n"
        f"- 💧 Humidity: {data['humidity']}\n"
        f"- 🌧 Rainfall: {data.get('rainfall', 'N/A')}\n"
    )

    content = re.sub(
        r"### 🌤 Sylhet Weather \(BMD\)[\s\S]*?(?=<!-- weather-end -->)",
        new_section + "\n",
        content,
    )

    with open("README.md", "w", encoding="utf-8") as f:
        f.write(content)

if __name__ == "__main__":
    data = get_weather()
    if data:
        update_readme(data)
