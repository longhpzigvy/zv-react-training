import { useState, useEffect } from "react";
var _ = require("lodash");
const axios = require("axios");

export default function GetCountries() {
  const [state, setState] = useState({
    countries: [],
    loading: false,
    value: "",
  });

  useEffect(() => {
    async function search() {
      setState((prevState) => ({ ...prevState, loading: true }));
      await axios
        .get("https://restcountries.eu/rest/v2/name/" + state.value)
        .then((res) => {
          const countries = res.data;
          setState((prevState) => ({
            ...prevState,
            loading: false,
            countries,
          }));
        })
        .catch((err) => {
          if (err.response.status === 404) {
            setState((prevState) => ({
              ...prevState,
              loading: false,
              countries: null,
            }));
          }
        });
    }
    const searchThrottled = _.debounce(search, 1000);
    searchThrottled();
  }, [state.value]);

  const handleChange = (e) => {
    setState((prevState) => ({
      ...prevState,
      value: e.target.value,
    }));
  };

  return (
    <div>
      <h4>Search for a country</h4>
      <input type="text" onChange={(e) => handleChange(e)} />
      {state.loading ? (
        <p>Loading..</p>
      ) : (
        state.countries && (
          <ul>
            {state.countries.map((country, idx) => (
              <li key={idx}>{country.name}</li>
            ))}
          </ul>
        )
      )}
    </div>
  );
}
