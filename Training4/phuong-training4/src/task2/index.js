import React, { useEffect, useState, useCallback } from "react";
import "./country.css";
import {
  getAllCountryAsync,
  getCountryByNameAsync,
} from "../services/country.service";
import Pagination from "../components/paging";
import { debounce } from "lodash";

const CountrySection = () => {
  const [countries, setCountries] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [countryPerPage] = useState(15);
  const [total, setTotal] = useState(0);
  const [valueSearch, setValueSearch] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const indexOfLastCountry = currentPage * countryPerPage;
      const indexOfFirstCountry = indexOfLastCountry - countryPerPage;
      let dataCountries = await getAllCountryAsync();
      const currentCountries = dataCountries.data.slice(
        indexOfFirstCountry,
        indexOfLastCountry
      );
      setCountries(currentCountries);
      setTotal(dataCountries.data.length);
    };

    fetchData();
  }, [currentPage, countryPerPage]);

  const renderCountries = countries.map((country) => (
    <div className="col-md-4 col-sm-6 col-12" key={country.name}>
      <div className="country">
        <p>Name: {country.name}</p>
        <p>Capital: {country.capital}</p>
        <p>Population: {country.population}</p>
      </div>
    </div>
  ));

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setValueSearch(value);
    handleSearch(value);
  };

  const getCountryByName = async (value) => {
    let result = await getCountryByNameAsync(value);
    setCountries(result.data);
    setTotal(result.data.length);
  };

  const handleSearch = useCallback(
    debounce((value) => {
      getCountryByName(value);
    }, 3000),
    []
  );

  const handleKeySearch = (event) => {
    if (event.key === "Enter") {
      getCountryByName(valueSearch);
    }
  };

  return (
    <div className="country-section container">
      <div className="row">
        <div className="col-md-6">
          <input
            type="text"
            className="form-control"
            value={valueSearch}
            onChange={handleChange}
            onKeyPress={handleKeySearch}
          />
        </div>
      </div>
      <div className="row countries">{renderCountries}</div>
      <div className="row">
        <div className="col">
          <Pagination
            countryPerPage={countryPerPage}
            total={total}
            handleChangePage={handleChangePage}
          />
        </div>
      </div>
    </div>
  );
};

export default CountrySection;
