import { useEffect, useState } from 'react'

const GEOCODE_URL = 'https://geocoding-api.open-meteo.com/v1/search'
const FORECAST_URL = 'https://api.open-meteo.com/v1/forecast'

function useWeatherData(city) {
  const [data, setData] = useState(null)
  const [location, setLocation] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const trimmed = (city || '').trim()
    if (!trimmed) {
      setData(null)
      setLocation(null)
      setError(null)
      setLoading(false)
      return
    }

    const controller = new AbortController()

    const run = async () => {
      setLoading(true)
      setError(null)

      try {
        const geoResponse = await fetch(
          `${GEOCODE_URL}?name=${encodeURIComponent(trimmed)}&count=1&language=en&format=json`,
          { signal: controller.signal },
        )

        if (!geoResponse.ok) {
          throw new Error('Failed to fetch location')
        }

        const geoData = await geoResponse.json()
        const first = geoData?.results?.[0]

        if (!first) {
          throw new Error('City not found')
        }

        const { latitude, longitude, name, country, admin1 } = first
        setLocation({ name, country, admin1, latitude, longitude })

        const weatherResponse = await fetch(
          `${FORECAST_URL}?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,wind_speed_10m&timezone=auto`,
          { signal: controller.signal },
        )

        if (!weatherResponse.ok) {
          throw new Error('Failed to fetch weather')
        }

        const weatherData = await weatherResponse.json()
        setData(weatherData)
      } catch (err) {
        if (err.name === 'AbortError') return
        setError(err.message || 'Something went wrong')
        setData(null)
        setLocation(null)
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    run()

    return () => controller.abort()
  }, [city])

  return { data, location, loading, error }
}

export default useWeatherData
