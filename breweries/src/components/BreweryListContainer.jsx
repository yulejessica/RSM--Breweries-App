import React from 'react';
import { useState, useEffect } from "react";
import axios from 'axios';


const BreweriesListContainer = () => {
  const [city, setCity] = useState('');
  const [breweriesData, setBreweriesData] = useState([]);

  useEffect(() => {
    axios.get('/')
  }, [])

  return (
    <div>
      <div className="breweriesList">
      </div>

    </div>


  )
}

export default BreweriesListContainer;