import Header from './Header';
import { useCountries } from '../hooks/useCountries';

export default function Countries() {
  const {
    filterCountries,
    continent,
    setContinent,
    error,
    query,
    setQuery,
    loading
  } = useCountries();

  return (
    <>
      <Header />
      <section className="countries-container">
        <input
          type="text"
          placeholder="Search Countries..."
          value={query}
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
        />

        <select
          name=""
          id=""
          value={continent}
          onChange={(e) => setContinent(e.target.value)}
        >
          <option value="all">All Countries</option>
          <option value="Africa">Africa</option>
          <option value="Antarctica">Antarctica</option>
          <option value="Asia">Asia</option>
          <option value="Oceania">Oceania</option>
          <option value="Americas">Americas</option>
        </select>
        <span className="error">{error}</span>
        <main>
          {loading && <p>Loading...</p>}
          {!loading && filterCountries().map((country) => (
            <div key={country.name}>{country.name}</div>
          ))}
        </main>
      </section>
    </>
  )
}
