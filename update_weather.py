import requests
import datetime
import subprocess
import re
import json

# ====== CONFIGURATION ======
# Replace stCode with your station code if needed (Sylhet = 41891)
URL = "https://presite.bmd.gov.bd/tracking/track.php?stCode=41891&lang=EN"
README = "README.md"
START_MARKER = "<!-- WEATHER-START -->"
END_MARKER = "<!-- WEATHER-END -->"
# ============================

def fetch_weather():
    """Fetch current weather data from BMD JSON endpoint."""
    try:
        r = requests.get(URL, timeout=15)
        r.raise_for_status()
        data = r.json()
        print("✅ JSON received:\n", json.dumps(data, indent=2))

        # Adjust these keys according to actual JSON structure
        current = data.get("temperature") or data.get("temp")
        tmin = data.get("min_temp") or data.get("mintemp") or data.get("min")
        tmax = data.get("max_temp") or data.get("maxtemp") or data.get("max")
        humidity = data.get("humidity") or data.get("hum")

        return current, tmin, tmax, humidity

    except Exception as e:
        print("❌ Error fetching weather data:", e)
        return None, None, None, None


def update_readme(current, tmin, tmax, humidity):
    """Update README.md with new weather values."""
    now = datetime.datetime.utcnow().strftime("%Y-%m-%d %H:%M UTC")
    block = f"""{START_MARKER}
### Sylhet Weather (Source: [BMD](https://live6.bmd.gov.bd))
_Updated: {now}_
* 🌡️ **Current Temperature:** {current or '..'}°C
* 🔻 **Min Temperature:** {tmin or '..'}°C
* 🔺 **Max Temperature:** {tmax or '..'}°C
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
