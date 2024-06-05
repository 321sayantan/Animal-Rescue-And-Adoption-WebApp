// // import { useState } from "react";
// import { Map, Marker } from "google-maps-react";

// const MapContainer = ({ google, posts }) => {
// //   const [map, setMap] = useState(null);

// //   const onMapReady = (mapProps, map) => {
// //     setMap(map);
// //   };

//   return (
//     <Map
//       google={google}
//       zoom={14}
//     //   onReady={onMapReady}
//       initialCenter={{
//         lat: 37.774929,
//         lng: -122.419416, // Default to San Francisco
//       }}
//     >
//       {posts.map((post) => (
//         <Marker
//           key={post.id}
//           position={{ lat: post.latitude, lng: post.longitude }}
//           name={post.title}
//         />
//       ))}
//       {/* 
//         <Marker
//           onClick={this.onMarkerClick}
//           name={'Kenyatta International Convention Centre'}
//         />
//         <InfoWindow
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}
//           onClose={this.onClose}
//         >
//           <div>
//             <h4>{this.state.selectedPlace.name}</h4>
//           </div>
//         </InfoWindow>
//       */}
//     </Map>
//   );
// };

// export default MapContainer