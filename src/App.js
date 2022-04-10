import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [countries, setCountries] = useState();

  useEffect(() => {
    const fetchCountries = async () => {
      const { data } = await axios.get(
        'https://ih-countries-api.herokuapp.com/countries'
      );
      setCountries(data);
    };

    fetchCountries();
  }, [countries]);
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<CountriesList />} />
          <Route
            path="countries/:alpha3Code"
            element={<CountryDetails countries={countries} />}
          />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
