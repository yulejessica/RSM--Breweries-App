import React from 'react';
import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { PropIdContext } from '../../App.js';
import BreweriesList from './BreweryList.jsx';

const BreweriesListContainer = () => {
  const {state, setstate} = useContext(PropIdContext);
  const {city, setCity} = useContext(PropIdContext);
  const [breweriesData, setBreweriesData] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:3001/citystate?by_city=${city}&by_state=${state}`)
    .then((res) => {
      console.log('all brewery info', res.data)
      setBreweriesData(res.data)
    })
    .catch((err) => {
      console.log('error while getting the all data', err)
    })
  }, [city, state])

  return (
    <div className="breweriesListContainer">
      <div className="breweriesList">
      {
        breweriesData.length > 0 &&
        <BreweriesList breweriesData={breweriesData} />
      }
      </div>
    </div>
  )
}

export default BreweriesListContainer;