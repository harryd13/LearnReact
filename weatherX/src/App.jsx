import { useState } from 'react'
import CityCard from './components/CityCard.jsx'
import InfoCard from './components/InfoCard.jsx'
import useWeatherData from './hooks/useWeatherData.js'

function App() {
  const [cityInput, setCityInput] = useState('')
  const [cityQuery, setCityQuery] = useState('')
  const { data, location, loading, error } = useWeatherData(cityQuery)

  return (
    <main className="min-h-screen bg-gray-700 flex flex-col items-center justify-center gap-6 px-4">
      <h1 className="text-white text-4xl font-semibold">WeatherX</h1>
      <CityCard
        value={cityInput}
        onChange={setCityInput}
        onSubmit={(city) => setCityQuery(city)}
      />
      <InfoCard location={location} data={data} loading={loading} error={error} />
    </main>
  )
}

export default App
