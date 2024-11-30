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

  const showHandle = (id) => {
    const showedCountry = countries.find(country => country.area === id);
    setSearchTerm(showedCountry.name.common);
  }


  // Weather data
  const [forecast, setForecast] = useState([])


  useEffect(() => {
    if (filteredCountries.length > 0) {
      countriesService
      .getAllForecast(`${filteredCountries[0].capital[0]}`)
      .then(initialForecast => {
        setForecast(initialForecast);
        // console.log(filteredCountries[0].capital[0])
        // console.log(forecast.weather[0].icon)
      })
    }
  }, [filteredCountries])

  //--------------

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
          <p key={country.area}>{country.name.common} <button onClick={() => showHandle(country.area)}>Show</button></p>
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

            <h2>Weather in {country.capital}</h2>
            <p>Temperature {Math.floor(forecast.main.temp - 273.15)} Celcius</p>
            <img src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt="Icon" />
            <p>Wind {forecast.wind.speed} m/s</p>
          </div>
        )) : (
          <p>No matches</p>
        )
      }

    </div>
  )
}

export default App
