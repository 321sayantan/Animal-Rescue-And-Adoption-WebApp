import { Fragment, useState } from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
// import {
//   GoogleMap,
//   AdvancedMarkerElement,
//   useJsApiLoader,
// } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
};

export const LocationPin = ({ text, onViewDetails, isActive }) => {
  return (
    <div className="pin">
      {isActive && <div className="position-absolute pin-text">{text}</div>}
      <Icon icon={locationIcon} className="pin-icon" onClick={onViewDetails} />
    </div>
  );
};

const MapContainer = ({ google, filteredPosts }) => {
  const [activeMarker, setActiveMarker] = useState(null);

  function handleActiveMarker(id) {
    setActiveMarker((prevId) => {
      if (prevId === id) {
        return null;
      }
      return id;
    });
  }
  // const handleActiveMarker = (marker) => {
  //   if (marker === activeMarker) {
  //     return;
  //   }
  //   setActiveMarker(marker);
  // };

  return (
    <>
      {/* {isLoaded && ( */}
      {/* <Map
        google={google}
        containerStyle={containerStyle}
        initialCenter={filteredPosts[0].donor_position}
        zoom={10}
        onClick={() => setActiveMarker(null)}
        ref={mapRef}
      >
        {filteredPosts.map((marker) => (
          <Fragment key={marker._id}>
            <Marker position={marker.donor_position} />
            <InfoWindow >
              <div>{marker.donor_address}</div>
            </InfoWindow>
          </Fragment>
        ))}
      </Map> */}
      {/* )} */}
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GMAP_API_KEY }}
        style={containerStyle}
        defaultCenter={filteredPosts[0]}
        defaultZoom={10}
      >
        {filteredPosts.map((pins) => (
          <LocationPin
            key={pins._id}
            lat={pins.lat}
            lng={pins.lng}
            text={pins.address}
            isActive={activeMarker === pins._id}
            onViewDetails={() => handleActiveMarker(pins._id)}
          />
        ))}
      </GoogleMapReact>
      {/* {activeMarker && <div className="container">{activeMarker}</div>} */}
    </>
  );
};

export default MapContainer;
