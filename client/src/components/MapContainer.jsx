import { useState } from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";

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

const MapContainer = ({ filteredPosts }) => {
  const [activeMarker, setActiveMarker] = useState(null);

  function handleActiveMarker(id) {
    setActiveMarker((prevId) => {
      if (prevId === id) {
        return null;
      }
      return id;
    });
  }
  const location = [{ ...filteredPosts[0] }];

  return (
    <>
      {filteredPosts.length > 0 ? (
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GMAP_API_KEY }}
          style={containerStyle}
          defaultCenter={location[0]}
          defaultZoom={5}
        >
          {/* {location.map((pins) => ( */}
          {filteredPosts.map((pins) => (
            <LocationPin
              key={pins._id}
              lat={pins.lat}
              lng={pins.lng}
              text={pins.address.split(",")[2]}
              isActive={activeMarker === pins._id}
              onViewDetails={() => handleActiveMarker(pins._id)}
            />
          ))}
        </GoogleMapReact>
      ) : (
        <div className="text-center mt-2">
          <h2>Sorry, No Match found! :(</h2>
        </div>
      )}
    </>
  );
};

export default MapContainer;
