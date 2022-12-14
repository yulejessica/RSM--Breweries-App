import React from 'react';
import {useState, useEffect} from 'react';
import GoogleMapReact from 'google-map-react';
import { HiLocationMarker } from 'react-icons/hi';
import Geocode from "react-geocode";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const BreweryCard = ({key, name, type, address, website, longitude, latitude}) => {


  const GOOGLE_API_KEY = process.env.REACT_APP_GOOGLE_TOKEN;

  const [loadingMap, setLoadingMap] = useState(true);


  const defaultProps = {
    center: {
      lat: 34.052235,
      lng: -118.243683
    },
    zoom:14
  }


  return (
    <div>
      <div className='breweryCard'>
          <div className='cardInfo'>
            <h3>Name: {name}</h3>
            <li>Type: {type}</li>
            <li>Address: {address}</li>
            <li> Website:{" "}
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                >
                  Click Here to Visit the Website
              </a>
            </li>
            {/* <li>Longitude:{longitude}</li>
            <li>Latitue: {latitude}</li> */}
            <div className='GoogleMap' style={{ height: '100vh', width: '100%' }}>
              {
                !loadingMap ?
                <div className="loadingMap">
                  <p style={{marginTop:'10px'}}>loading map...</p>
                </div>
                :
                (<GoogleMapReact
                    bootstrapURLKeys={{ key: GOOGLE_API_KEY}}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                    margin={[50, 50, 50, 50]}
                    options={''}

                >
                  <AnyReactComponent
                    lat={latitude}
                    lng={longitude}
                    text="Marker"
                  />
                  <HiLocationMarker  style={{ color: '#DA2C38'}} fontSize="large" />
                </GoogleMapReact>
                  )
              }
            </div>

        </div>
      </div>
    </div>
  )
}

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_TOKEN);
Geocode.setLanguage("en");
Geocode.setRegion("us");

export default BreweryCard;