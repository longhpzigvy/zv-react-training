import React, { useState, useEffect } from "react";
import axios from "axios";
import { debounce } from "lodash";

const Country = () => {
  const [name, setName] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/country?keyword=${name}`)
      .then((res) => {
          if (!name) {
              return setCountries([])
          }
          setCountries(res.data)
      })
      .catch((err) => console.log(err));
  }, [name]);

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const debounceHandleChange = debounce(handleChange, 1000);
  return (
    <div>
      <h1>Search country</h1>
      <input onChange={debounceHandleChange} />
      {countries.map((country) => (
        <div>
          <p>The country: {country.name}</p>
          <p>The captial of the country: {country.capital}</p>
        </div>
      ))}
    </div>
  );
};

export default Country;
