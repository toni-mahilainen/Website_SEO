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
import Palikkala from './Palikkala';
import Palaute from './Palaute';
// import ReactGoogleMapLoader from "react-google-maps-loader";
// import ReactGoogleMap from "react-google-map"
// import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
// import { compose, withProps } from "recompose";

// const MyMapComponent = compose(
//     withProps({
//         googleMapURL: "https://maps.googleapis.com/maps/api/js?key=API-KEY&v=3.exp&libraries=geometry,drawing,places",
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

// const MY_API_KEY = "API-KEY"

// const Map = () =>
//     // GoogleMap component has a 100% height style.
//     // You have to set the DOM parent height.
//     // So you can perfectly handle responsive with differents heights.
//     <div style={{ width: 600 }}>
// 			<ReactGoogleMapLoader
// 				params={{
// 					key: MY_API_KEY,
// 					libraries: "places,geometry",
// 				}}
// 				render={googleMaps =>
// 					googleMaps && (
// 						<div style={{ height: "300px" }}>
// 							<ReactGoogleMap
// 								googleMaps={googleMaps}
// 								center={{ lat: 43.604363, lng: 1.443363 }}
// 								zoom={8}
// 							/>
// 						</div>
// 					)}
// 			/>
// 		</div>
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
    componentDidMount() {
        window.onorientationchange = function () { window.location.reload(); };

        let path = window.location.pathname;
        switch (path) {
            case "/":
                let etusivu = document.getElementById("etusivuLink");
                etusivu.classList.add("visibleLink");
                break;
            case "/Yritys":
                let yritys = document.getElementById("yritysLink");
                yritys.classList.add("visibleLink");
                break;
            case "/Kahvila_Ravintola":
                let kahvilaRavintola = document.getElementById("kahvilaRavintolaLink");
                kahvilaRavintola.classList.add("visibleLink");
                break;
            case "/Huoltamo":
                let huoltamo = document.getElementById("huoltamoLink");
                huoltamo.classList.add("visibleLink");
                break;
            case "/Palikkala":
                let palikkala = document.getElementById("palikkalaLink");
                palikkala.classList.add("visibleLink");
                break;
            case "/Palaute":
                let palaute = document.getElementById("palauteLink");
                palaute.classList.add("visibleLink");
                break;
            default:
                break;
        }

        let screenwidth = window.screen.width;

        if (screenwidth < 992) {
            let nav = document.getElementById("nav");
            let hiddens = document.getElementsByClassName("nav-link");

            for (let index = 0; index < hiddens.length; index++) {
                if (hiddens[index].classList.contains("visibleLink") === false) {
                    hiddens[index].classList.add("hiddenLink");
                }
            }

            nav.classList.add("smallNav");
        }
    }

    heightUp() {
        let screenwidth = window.screen.width;

        if (screenwidth < 992) {
            let nav = document.getElementById("nav");
            let hiddens = document.getElementsByClassName("nav-link");

            setTimeout(
                function () {
                    for (let index = 0; index < hiddens.length; index++) {
                        hiddens[index].classList.remove("hiddenLink");
                        hiddens[index].classList.add("visibleLink");
                    }
                }
                , 50)

            nav.classList.replace("smallNav", "largeNav");
        }
    }

    heightDown() {
        let screenwidth = window.screen.width;

        if (screenwidth < 992) {
            let nav = document.getElementById("nav");
            let hiddens = document.getElementsByClassName("nav-link");

            for (let index = 0; index < hiddens.length; index++) {
                if (hiddens[index].classList.contains("activeLink") === false) {
                    hiddens[index].classList.add("hiddenLink");
                }

                hiddens[index].classList.remove("visibleLink");
            }

            nav.classList.replace("largeNav", "smallNav");
        }
    }

    addActiveClass(e) {
        let link = e.target;
        let links = document.getElementsByClassName("nav-link");

        for (let index = 0; index < links.length; index++) {
            if (links[index].classList.contains("activeLink")) {
                links[index].classList.remove("activeLink");
            }
        }

        link.classList.add("activeLink");
    }

    render() {
        return (
            <div className="App">
                {
                    // <MyMapComponent isMarkerShown />
                }
                <Header />
                <Router>
                    <nav id="nav" className="navbar navbar-expand-lg" onMouseEnter={this.heightUp} onMouseLeave={this.heightDown}>
                        <ul className="navbar-nav mr-auto ml-auto">
                            <li><Link id="etusivuLink" onClick={this.addActiveClass} to={"/"} className="nav-link">Etusivu</Link></li>
                            <li><Link id="yritysLink" onClick={this.addActiveClass} to={"/Yritys"} className="nav-link">Yritys</Link></li>
                            <li><Link id="kahvilaRavintolaLink" onClick={this.addActiveClass} to={"/Kahvila_Ravintola"} className="nav-link">Kahvila / Ravintola</Link></li>
                            <li><Link id="huoltamoLink" onClick={this.addActiveClass} to={"/Huoltamo"} className="nav-link">Huoltamo</Link></li>
                            <li><Link id="palikkalaLink" onClick={this.addActiveClass} to={"/Palikkala"} className="nav-link">SEO Palikkala</Link></li>
                            <li><Link id="palauteLink" onClick={this.addActiveClass} to={"/Palaute"} className="nav-link">Palaute</Link></li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={Etusivu} />
                        <Route path="/Yritys" component={Yritys} />
                        <Route path="/Kahvila_Ravintola" component={KahvilaRavintola} />
                        <Route path="/Huoltamo" component={Huoltamo} />
                        <Route path="/Palikkala" component={Palikkala} />
                        <Route path="/Palaute" component={Palaute} />
                    </Switch>
                </Router>
                <Footer />
            </div>
        );
    }
}

export default App;