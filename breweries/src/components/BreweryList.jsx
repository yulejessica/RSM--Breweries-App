import React from 'react';
import BreweryCard from './BreweryCard.jsx';


const BreweriesList = ({breweriesData}) => {

  return (
    <div>
      <div className="breweriesList">
        <div>
        {breweriesData.map((brewery, index) => (
          <BreweryCard
            key={index}
            name={brewery.name}
            type={brewery.brewery_type}
            address={`${brewery.street} ${brewery.city}, ${brewery.state} ${brewery.postal_code}`}
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