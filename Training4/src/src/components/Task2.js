import React, { useCallback, useState } from "react";
import { debounce } from "lodash";
import axios from "axios";

function Task2() {
  const [country, setCountry] = useState(null);

  const handleChange = async (e) => {
    try {
      console.log(e.target.value);

      const { data } = await axios.get(
        `https://restcountries.eu/rest/v2/name/${e.target.value}`
      );
      setCountry(data[0]);
    } catch (error) {
      setCountry(null);
      console.error(error);
    }
  };

  const handleSearch = useCallback(debounce(handleChange, 1000), []);

  return (
    <div>
      <input onChange={handleSearch} />
      {country ? (
        <div>
          <p>Name: {country.name}</p>
          <p>Top level domain: {country.topLevelDomain}</p>
          <p>Captital: {country.capital}</p>
        </div>
      ) : (
        <p>No match data to display</p>
      )}
    </div>
  );
}

export default Task2;
