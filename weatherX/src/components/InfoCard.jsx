function InfoCard({ location, data, loading, error }) {
  if (loading) {
    return (
      <section className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur text-white">
        <p>Loading weather...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur text-white">
        <p>{error}</p>
      </section>
    )
  }

  if (!location || !data?.current) {
    return null
  }

  const { name, admin1, country } = location
  const { temperature_2m, wind_speed_10m, weather_code } = data.current

  return (
    <section className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur text-white">
      <h2 className="text-2xl font-semibold">
        {name}
        {admin1 ? `, ${admin1}` : ''}
        {country ? `, ${country}` : ''}
      </h2>
      <div className="mt-4 flex flex-col gap-4 text-sm">
        <div>
          <p className="text-white/70">Temperature</p>
          <p className="text-xl font-semibold">{temperature_2m}°C</p>
        </div>
        <div>
          <p className="text-white/70">Wind</p>
          <p className="text-xl font-semibold">{wind_speed_10m} km/h</p>
        </div>
        <div>
          <p className="text-white/70">Weather code</p>
          <p className="text-xl font-semibold">{weather_code}</p>
        </div>
      </div>
    </section>
  )
}

export default InfoCard
