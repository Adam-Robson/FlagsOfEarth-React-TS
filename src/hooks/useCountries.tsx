import { useState, useEffect } from 'react';
import { fetchAllCountries } from '../services/countries';

export function useCountries() {
  const [countries, setCountries] = useState<any[]>([]);
  const [continent, setContinent] = useState('all');
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const data = await fetchAllCountries();
        if (data) {
          setCountries(data);
        } else {
          setCountries([]);
        }
        setLoading(false);
      } catch (error: any) {
        setError(error.message)
      }
    }
    fetchData();
  }, []);

  function filterCountries() {
    return countries.filter(
      (country: any) => {
        return (continent === 'all'
          ? true
          : country.region === continent) &&
          country.name.toLowerCase().includes(query);
      });
  }

  return {
    continent,
    setContinent,
    query,
    setQuery,
    loading,
    error,
    filterCountries
  };
}
