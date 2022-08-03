import React from 'react';
import BreweryCard from './brewerydetail/BreweryCard.jsx';
import { useState } from "react";


const BreweriesList = ({breweriesData}) => {

  // const [city, setCity] = useState();
  // const [toggleStatus,setToggleStatus] = useState(false);

  // // console.log('togglestatus', toggleStatus);

  // const toggle = () => {
  //   !toggleStatus ? setToggleStatus(true) : setToggleStatus(false);
  // }


  return (
    <div>
      <div className="breweriesList">
      {/* <button className='btn' onClick={toggle}>
          <i />
          More Breweries
      </button> */}
        <div>

        {breweriesData?.map((brewery, index) => (
          <BreweryCard
            key={index}
            name={brewery.name}
            type={brewery.brewery_type}
            address={`${brewery.street}, ${brewery.city}, ${brewery.state}, ${brewery.postal_code}`}
            website={brewery.website_url}
            longitude={brewery.longitude}
            latitude={brewery.latitude}

          />
        ))}
        </div>
      </div>


    </div>
  )
}

export default BreweriesList;