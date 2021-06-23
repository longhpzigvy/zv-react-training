import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import WorldList from "../components/WorldList";
import { throttle } from "lodash";
import { debounce } from "lodash";
Home.propTypes = {};

function Home(props) {
  const [world, setWorld] = useState([]);
  const [dataSearch, setDataSearch] = useState("");

  const URL = "https://restcountries.eu/rest/v2/all";

  useEffect(() => {
    (() => {
      try {
        fetch(URL)
          .then((response) => response.json())
          .then((data) => setWorld(data));
      } catch (error) {
        console.log("fail to fetch world data", error);
      }
    })();
  }, []);

  const handleChangeSearch = (e) => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => setWorld(data));
    e.preventDefault();
    const { value } = e.target;
    setDataSearch(value.trim());
  };

  const handleInputDebounced = debounce(handleChangeSearch, 1000);
//   const handleInputThrottled = throttle(handleChangeSearch, 1000);



  const renderDataWorld = () => {
    let result = null;
    if (dataSearch) {
      result = world
        .filter((data) => data.name.includes(dataSearch))
        .map((data, index) => (
          <tr key={index}>
            <WorldList data={data} />
          </tr>
        ));
    } else {
      result = world.map((data, index) => (
        <tr key={index}>
          <WorldList data={data} />
        </tr>
      ));
    }
    return result;
  };

  return (
    <div>
      {/* Search here */}
      <h2>Search countries by their name</h2>
      <input
        type="text"
        name=""
        id="txtSearch"
        onChange={handleInputDebounced}
        style={{ width: "300px", marginBottom: "30px" }}
      />

      <table>
        <tr>
          <th>Name</th>
          <th>Capital</th>
          <th>Area</th>
        </tr>
        {renderDataWorld()}
      </table>
    </div>
  );
}

export default Home;
