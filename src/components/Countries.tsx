import Header from './Header';
import { useCountries } from '../hooks/useCountries';
import Country from './Country';

export default function Countries() {
  const {
    filterCountries,
    continent,
    setContinent,
    error,
    loading
  } = useCountries();

  return (
    <>
      <Header />
      <section className="countries-container">
        <select
          className="select"
          name="continent"
          id="continent"
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
          <section className="flag-grid">
            {!loading && filterCountries().map((country) => (
              <Country
                key={country.id}
                name={country.name}
                iso2={country.iso2}
              />
            ))}
          </section>
        </main>
      </section>
    </>
  )
}
