import { Fragment, useEffect, useRef, useState } from "react";
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

const MapContainer = ({ isError, error, filteredPosts }) => {
  const [activeMarker, setActiveMarker] = useState(null);
  const mapRef = useRef();

  function handleActiveMarker(id) {
    setActiveMarker((prevId) => {
      if (prevId === id) {
        return null;
      }
      return id;
    });
  }

  useEffect(() => {
    // const map = mapRef.current;
    // map.current();
    console.log(filteredPosts);
  });

  return (
    <>
      {filteredPosts.length > 0 ? (
        <GoogleMapReact
          ref={mapRef}
          bootstrapURLKeys={{ key: process.env.REACT_APP_GMAP_API_KEY }}
          style={containerStyle}
          defaultCenter={filteredPosts[0]}
          defaultZoom={10}
        >
          {filteredPosts.map((pins) => (
            <LocationPin
              key={pins._id}
              // lat={pins.donor_latitude}
              // lng={pins.donor_longitude}
              // text={pins.donor_address}
              lat={pins.lat}
              lng={pins.lng}
              text={pins.address}
              isActive={activeMarker === pins._id}
              onViewDetails={() => handleActiveMarker(pins._id)}
            />
          ))}
        </GoogleMapReact>
      ) : (
        <div className="container py-4">
          <h2>No Match found!</h2>
        </div>
      )}

      {/* {activeMarker && <div className="container">{activeMarker}</div>} */}
    </>
  );
};

export default MapContainer;
