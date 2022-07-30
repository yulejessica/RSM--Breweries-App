import React from 'react';
import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { PropIdContext } from '../App.js';

const BreweriesListContainer = () => {
  const {state, setstate} = useContext(PropIdContext);
  const [city, setCity] = useState('');
  const [breweriesData, setBreweriesData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/')
    .then((res) => {
      console.log('all brewery info', res.data)
      setBreweriesData(res.data)
    })
    .catch((err) => {
      console.log('error while getting the all data', err)
    })
  }, [])

  return (
    <div>
      <div className="breweriesList">
      </div>

    </div>


  )
}

export default BreweriesListContainer;