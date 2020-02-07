import React from "react";
import PropTypes from 'prop-types';

import GoogleMap from "react-google-map";
import ReactGoogleMapLoader from "react-google-maps-loader";

import "../App.css"

const MY_API_KEY = "API-KEY" // fake

const Map = () =>
    // GoogleMap component has a 100% height style.
    // You have to set the DOM parent height.
    // So you can perfectly handle responsive with differents heights.
    <ReactGoogleMapLoader
        params={{
            key: MY_API_KEY, // Define your api key here
            libraries: "places,geometry", // To request multiple libraries, separate them with a comma
        }}
        render={(googleMaps, error) =>
            googleMaps ? (
                <div>
                    {/*Show a custom error if SDK Authentication Error. See N/B 2 below.*/}
                    {error ? error : "Google Maps is loaded !"}
                </div>
            )   :   (
                <div>
                    {/*Check for network error so loading state ends if user lost connection.*/}
                    {error === "Network Error" ? <p>{error}</p> : <p>isLoading...</p>}
                </div>
            )
        }/>
//     <div className="map">
//         <GoogleMap
//             googleMaps={googleMaps}
//             // You can add and remove coordinates on the fly.
//             // The map will rerender new markers and remove the old ones.
//             coordinates={[
//                 {
//                     title: "Toulouse",
//                     position: {
//                         lat: 43.604363,
//                         lng: 1.443363,
//                     },
//                     onLoaded: (googleMaps, map, marker) => {
//                         // Set Marker animation
//                         marker.setAnimation(googleMaps.Animation.BOUNCE)

//                         // Define Marker InfoWindow
//             //             const infoWindow = new googleMaps.InfoWindow({
//             //                 content: `
//             //     <div>
//             //       <h3>Toulouse<h3>
//             //       <div>
//             //         Toulouse is the capital city of the southwestern
//             //         French department of Haute-Garonne,
//             //         as well as of the Occitanie region.
//             //       </div>
//             //     </div>
//             //   `,
//             //             })

//                         // // Open InfoWindow when Marker will be clicked
//                         // googleMaps.event.addListener(marker, "click", () => {
//                         //     infoWindow.open(map, marker)
//                         // })

//                         // // Change icon when Marker will be hovered
//                         // googleMaps.event.addListener(marker, "mouseover", () => {
//                         //     marker.setIcon(iconMarkerHover)
//                         // })

//                         // googleMaps.event.addListener(marker, "mouseout", () => {
//                         //     marker.setIcon(iconMarker)
//                         // })

//                         // // Open InfoWindow directly
//                         // infoWindow.open(map, marker)
//                     },
//                 }
//             ]}
//             center={{ lat: 43.604363, lng: 1.443363 }}
//             zoom={8}
//             onLoaded={(googleMaps, map) => {
//                 map.setMapTypeId(googleMaps.MapTypeId.SATELLITE)
//             }}
//         />
//     </div>
// )

// Map.propTypes = {
//     googleMaps: PropTypes.object.isRequired,
// }