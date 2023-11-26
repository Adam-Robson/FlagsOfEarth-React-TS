import { useState, useEffect } from 'react';
import { fetchAllCountries } from '../services/countries';
import Header from './Header';

interface CountryPropType {
  name: string;
  iso2: string;
  region: string;
}

export default function Countries() {
  const [countries, setCountries] = useState<CountryPropType[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchAllCountries();
        if (data) {
          setCountries(data);
        } else {
          setCountries([]);
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error(`There was an error while retrieving the data, in the catch block: ${error.message}`);
        } else {
          console.error(`There was an error while retrieving the data, that is not an "Error": ${error}`);
        }
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div>Countries</div>
      <div>{countries.map((country) => (
        <div key={country.name}>
          <div>{country.name}</div>
          <div>{country.iso2}</div>
          <div>{country.region}</div>
        </div>
      ))}</div>
    </>
  )
}
