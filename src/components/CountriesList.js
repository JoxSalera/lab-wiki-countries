import React from 'react';
import { Link } from 'react-router-dom';
import countries from '../countries.json';

const CountriesList = () => {
  const countriesData = countries.map((country, i) => {
    return (
      <Link to={`/countries/${country.alpha3Code}`}>
        {' '}
        {country.name.common}{' '}
      </Link>
    );
  });

  return <div className="countries-list">{countriesData}</div>;
};

export default CountriesList;
