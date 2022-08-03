import React from 'react';
import { useState, useEffect, useContext } from "react";
import axios from 'axios';
import { PropIdContext } from '../../App.js';
import BreweriesList from './BreweryList.jsx';
import Navigation from '../navigation/Navigation.jsx';
import Geocode from "react-geocode";
import GoogleMapReact from 'google-map-react';
import { HiLocationMarker } from 'react-icons/hi';


const BreweriesListContainer = () => {

  const {state, setstate} = useContext(PropIdContext);
  const {city, setCity} = useContext(PropIdContext);
  const [breweriesData, setBreweriesData] = useState([]);



  const handleSearch = (e) => {
    e.preventDefault();
    const searchedCity = city.toLowerCase().split(' ').join('_');
    // console.log('searchedCity', searchedCity);
    axios.get(`http://localhost:3001/city?by_city=${searchedCity}&by_state=${state}`)
    .then((list) => setBreweriesData(list.data))
    .catch((err) => {console.log('err message', err)});

  }

  useEffect(() => {
    axios.get(`http://localhost:3001/citystate?by_city=${city}&by_state=${state}`)
    .then((res) => {
      console.log('all brewery info', res.data)
      setBreweriesData(res.data)
    })
    .catch((err) => {
      console.log('error while getting the all data', err)
    })
  }, [city, state]);



  return (
    <div className="breweriesListContainer">
      <div className="breweriesList">
      <Navigation
            setCity={setCity}
            city={city}
            handleSearch={handleSearch}
          />
      {
        breweriesData.length > 0 &&
        <BreweriesList breweriesData={breweriesData}/>
      }


      </div>
    </div>
  )
}




export default BreweriesListContainer;