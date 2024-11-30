import { useState, useEffect } from 'react'
import countriesService from './countries';

const App = () => {

  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    countriesService
      .getAll()
      .then(initialCounties => {
          setCountries(initialCounties);
          setLoading(false);
      })
  }, [])

  const [searchTerm, setSearchTerm] = useState('');

  const filteredCountries = countries.filter(country => 
    country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
  )

  console.log(filteredCountries)


  return (
    <div>
      <label htmlFor="search">Find countries </label>
      <input id="search" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      {loading && (
        <p>Loading...</p>
      )}

      {searchTerm === '' ? (
        <p>Field empty</p>
      ) : filteredCountries.length > 10 ? (
        <p>Too many matches, specify another filter</p>
      ) : filteredCountries.length < 10 && filteredCountries.length > 1 ? 
        filteredCountries.map((country) => (
          <p key={country.area}>{country.name.common}</p>
        )) : filteredCountries.length === 1 ? 
        filteredCountries.map((country) => (
          <div key={country.area}>
            <h2>{country.name.common}</h2>
            <p>Capital {country.capital}</p>
            <p>Area {country.area}</p>
            <p><b>Languages: </b></p>
            <ul>
              {Object.entries(country.languages).map(([code, lang]) => (
                <li key={code}>{lang}</li>
              ))}
            </ul>
            <img src={country.flags.png} alt={country.flags.alt} />
          </div>      
        )) : (
          <p>No matches</p>
        )
      }

    </div>
  )
}

export default App
