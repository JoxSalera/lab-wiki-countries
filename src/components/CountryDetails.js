import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CountryDetails = ({ countries }) => {
  let countryParams = useParams();

  const countryFound = countries.find(
    (country) => country.alpha3Code === countryParams.alpha3Code
  );
  const languagesString = countryFound.languages
    ? Object.values(countryFound.languages)
        .map((x) => x)
        .join(' and ')
    : 'nothing';

  return (
    <div>
      <img
        src={`https://flagpedia.net/data/flags/icon/72x54/${countryFound.alpha2Code.toLowerCase()}.png`}
        alt={countryFound.name.common}
      />
      <p>
        {' '}
        {countryFound.name.common} {countryFound.alpha3Code}{' '}
      </p>
      <p> Languages are {languagesString} </p>
      <p> This country is {countryFound.area} km² </p>

      <>
        <Link to="/"> Go Back </Link>
      </>
    </div>
  );
};

export default CountryDetails;
