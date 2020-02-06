import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Etusivu from './Etusivu';
import Footer from './Footer';
import Yritys from './Yritys';
import KahvilaRavintola from './Kahvila_Ravintola';
import Huoltamo from './Huoltamo';
import Palaute from './Palaute';
import ReactGoogleMapLoader from "react-google-maps-loader";
import ReactGoogleMap from "react-google-map"
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
// import { compose, withProps } from "recompose";

// const MyMapComponent = compose(
//     withProps({
//         googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyAkQlXC7Oir283E-a9tPqz45Gc6KEjj5Lw&v=3.exp&libraries=geometry,drawing,places",
//         loadingElement: <div style={{ height: '200px', width: '400px' }} />,
//         containerElement: <div style={{ height: '200px', width: '400px' }} />,
//         mapElement: <div style={{ height: '200px', width: '400px' }} />
//     }),
//     withScriptjs,
//     withGoogleMap
//     )(props => (
//     <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
//         {props.isMarkerShown && (
//             <Marker position={{ lat: -34.397, lng: 150.644 }} />
//         )}
//     </GoogleMap>
// ));

const MY_API_KEY = "AIzaSyAkQlXC7Oir283E-a9tPqz45Gc6KEjj5Lw"

const Map = () =>
    // GoogleMap component has a 100% height style.
    // You have to set the DOM parent height.
    // So you can perfectly handle responsive with differents heights.
    <div style={{ width: 600 }}>
			<ReactGoogleMapLoader
				params={{
					key: MY_API_KEY,
					libraries: "places,geometry",
				}}
				render={googleMaps =>
					googleMaps && (
						<div style={{ height: "300px" }}>
							<ReactGoogleMap
								googleMaps={googleMaps}
								center={{ lat: 43.604363, lng: 1.443363 }}
								zoom={8}
							/>
						</div>
					)}
			/>
		</div>
    // <ReactGoogleMapLoader
    //     params={{
    //         key: MY_API_KEY, // Define your api key here
    //         libraries: "places,geometry", // To request multiple libraries, separate them with a comma
    //     }}
    //     render={googleMaps =>
    //         googleMaps && (
    //             <div style={{ height: "300px" }}>
    //                 <ReactGoogleMap
    //                     googleMaps={googleMaps}
    //                     center={{ lat: 43.604363, lng: 1.443363 }}
    //                     zoom={8}
    //                 />
    //             </div>
    //         )}
    // />

class App extends Component {
    render() {
        return (
            <div className="App">
                {
                    // <MyMapComponent isMarkerShown />
                }
                <Header />
                <Router>
                    <nav className="navbar navbar-expand-lg">
                        <ul className="navbar-nav mr-auto ml-auto">
                            <li><Link to={"/"} className="nav-link">Etusivu</Link></li>
                            <li><Link to={"/Yritys"} className="nav-link">Yritys</Link></li>
                            <li><Link to={"/Kahvila_Ravintola"} className="nav-link">Kahvila / Ravintola</Link></li>
                            <li><Link to={"/Huoltamo"} className="nav-link">Huoltamo</Link></li>
                            <li><Link to={"/Palaute"} className="nav-link">Palaute</Link></li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={Etusivu} />
                        <Route path="/Yritys" component={Yritys} />
                        <Route path="/Kahvila_Ravintola" component={KahvilaRavintola} />
                        <Route path="/Huoltamo" component={Huoltamo} />
                        <Route path="/Palaute" component={Palaute} />
                    </Switch>
                </Router>
                <Footer />
            </div>
        );
    }
}

export default App;