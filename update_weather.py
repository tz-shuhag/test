import requests
import datetime
import subprocess
import re

# ====== CONFIGURATION ======
# Sylhet coordinates (approx.)
LAT, LON = 24.8949, 91.8687
URL = f"https://api.open-meteo.com/v1/forecast?latitude={LAT}&longitude={LON}&current=temperature_2m,relative_humidity_2m"
README = "README.md"
START_MARKER = "<!-- WEATHER-START -->"
END_MARKER = "<!-- WEATHER-END -->"
# ============================

def fetch_weather():
    """Fetch current weather data from Open-Meteo."""
    try:
        r = requests.get(URL, timeout=15)
        r.raise_for_status()
        data = r.json()

        current = data["current"]["temperature_2m"]
        humidity = data["current"]["relative_humidity_2m"]

        # Open-Meteo doesn't provide min/max in the free endpoint, so we skip those.
        return current, None, None, humidity

    except Exception as e:
        print("❌ Error fetching weather data:", e)
        return None, None, None, None


def update_readme(current, tmin, tmax, humidity):
    """Update README.md with new weather values."""
    now = datetime.datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC")
    block = f"""{START_MARKER}
### Sylhet Weather (Source: [Open-Meteo](https://open-meteo.com))
_Updated: {now}_
* 🌡️ **Current Temperature:** {current or '..'}°C
* 💧 **Humidity:** {humidity or '..'}%
{END_MARKER}
"""

    # Read old content
    with open(README, "r", encoding="utf-8") as f:
        content = f.read()

    # Replace or append weather section
    if START_MARKER in content and END_MARKER in content:
        new_content = re.sub(
            f"{START_MARKER}.*?{END_MARKER}", block, content, flags=re.S
        )
    else:
        new_content = content.strip() + "\n\n" + block

    # Write only if changed
    if new_content != content:
        with open(README, "w", encoding="utf-8") as f:
            f.write(new_content)

        subprocess.run(["git", "config", "--global", "user.email", "actions@github.com"], check=True)
        subprocess.run(["git", "config", "--global", "user.name", "github-actions[bot]"], check=True)
        subprocess.run(["git", "add", README], check=True)
        subprocess.run(["git", "commit", "-m", "Update weather data"], check=False)
        subprocess.run(["git", "push"], check=False)
        print("✅ README updated and pushed.")
    else:
        print("ℹ️ No changes in weather data; nothing to commit.")


if __name__ == "__main__":
    current, tmin, tmax, humidity = fetch_weather()
    update_readme(current, tmin, tmax, humidity)
