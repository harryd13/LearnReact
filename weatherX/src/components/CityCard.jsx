function CityCard({ value, onChange, onSubmit }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmed = value.trim()
    if (!trimmed) return
    onSubmit(trimmed)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/10 border border-white/20 rounded-2xl p-6 backdrop-blur"
    >
      <label htmlFor="city-input" className="block text-white text-sm mb-2">
        City
      </label>
      <div className="flex gap-3">
        <input
          id="city-input"
          type="text"
          name="city"
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Enter a city"
          className="flex-1 rounded-lg bg-white/90 px-3 py-2 text-slate-900 outline-none focus:ring-2 focus:ring-white/60"
        />
        <button
          type="submit"
          className="rounded-lg bg-white text-slate-900 px-4 py-2 font-semibold hover:bg-white/90"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default CityCard
