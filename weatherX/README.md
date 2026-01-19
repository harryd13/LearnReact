# WeatherX

A simple React + Vite weather app that lets you search a city and view current conditions.
It uses the Open-Meteo Geocoding API to resolve latitude/longitude and then fetches
current weather data from the Open-Meteo Forecast API.

## Features
- City search input with submit action
- Fetches geocoding and weather data on submit
- Clean, centered UI using Tailwind CSS
- Loading and error states

## Tech Stack
- React (Vite)
- Tailwind CSS
- Open-Meteo APIs

## Project Structure
- `src/components/CityCard.jsx` - Input card UI
- `src/components/InfoCard.jsx` - Weather info display
- `src/hooks/useWeatherData.js` - Fetches geocoding + weather data
- `src/App.jsx` - App layout and state wiring

## Run Locally
From the repo root:

```bash
cd weatherX
npm install
npm run dev
```

Then open the URL printed in the terminal (usually `http://localhost:5173`).

## Notes
- No API key required (Open-Meteo is free for basic usage).
- If you want to change which weather fields are shown, update
  `src/hooks/useWeatherData.js` and `src/components/InfoCard.jsx`.

## Push Changes
From the repo root:

```bash
git add weatherX
git commit -m "Update WeatherX"
git push
```
