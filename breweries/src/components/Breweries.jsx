import React from 'react';
import GoogleMapReact from 'google-map-react';

const Breweries = () => {
  // const defaultProps = {
  //   center: {
  //     lat: 10.99835602,
  //     lng: 77.01502627
  //   },
  //   zoom: 11
  // };

  return (
    <div>
      <div className="breweriesList">
      </div>
      <div className="googleMap" style={{ height: '100vh', width: '100%' }}>
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      </GoogleMapReact> */}
    </div>

    </div>
  )
}

export default Breweries;