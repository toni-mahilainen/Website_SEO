import React, { Component } from 'react';
import '../App.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
    <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 60.826359, lng: 23.591212 }}
    >
        {props.isMarkerShown && <Marker position={{ lat: 60.818660, lng: 23.600825 }} />}
    </GoogleMap>
))

class Footer extends Component {
    heightUp() {
        let footer = document.getElementById("footer");
        let hiddens = document.getElementsByClassName("footerHidden");

        for (let index = 0; index < hiddens.length; index++) {
            hiddens[index].classList.remove("hidden");
            hiddens[index].classList.add("visible");
        }

        footer.classList.remove("smallFooter");
        footer.classList.add("largeFooter");
    }

    heightDown() {
        let footer = document.getElementById("footer");
        let hiddens = document.getElementsByClassName("footerHidden");

        for (let index = 0; index < hiddens.length; index++) {
            hiddens[index].classList.remove("visible");
            hiddens[index].classList.add("hidden");
        }

        footer.classList.remove("largeFooter");
        footer.classList.add("smallFooter");
    }

    render() {
        return (
            <footer id="footer" onMouseEnter={this.heightUp} onMouseLeave={this.heightDown}>
                <div id="footerWrapper">
                    <section id="contactInfo">
                        <h4>Yhteystiedot</h4>
                        <address className="footerHidden">
                            Kosken Autohuolto Oy <br />
                            Hämeentie 2  <br />
                            31500, Koski TL <br />
                            info@koskenseo.fi <br />
                            (02) 4841 625 (kahvila) <br />
                            (02) 4841 690 (huolto) <br />
                            (02) 4846 266 (kahvila / Palikkala)
                        </address>
                    </section>
                    <section id="openInfo">
                        <h4>Aukioloajat</h4>
                        <Container bsPrefix="openInfoContainer footerHidden">
                            <Row>
                                <Col>
                                    <h5>SEO Koski</h5>
                                    <ul>
                                        <li>Maanantai - Perjantai</li>
                                        <li className="listTimes">06.00 - 19.00</li>
                                        <li>Lauantai</li>
                                        <li className="listTimes">08.00 - 16.00</li>
                                        <li>Sunnuntai</li>
                                        <li className="listTimes">09.00 - 16.00</li>
                                    </ul>
                                </Col>
                                <Col>
                                    <h5>SEO Palikkala</h5>
                                    <ul>
                                        <li>Maanantai - Perjantai</li>
                                        <li className="listTimes">07.30 - 16.00</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section id="googleMap">
                        <h4>Sijainti</h4>
                        <div className="footerHidden" id="mapDiv">
                            <MyMapComponent
                                isMarkerShown
                                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyD_8IHVsxQgOu4rcjxJEBRcCYNnikji3CY&v=3.exp&libraries=geometry,drawing,places"
                                containerElement={<div style={{ height: '20vh', width: '100%' }} />}
                                mapElement={<div style={{ height: '100%', width: '100%' }} />}
                                loadingElement={<div style={{ height: '100%', width: '100%' }} />}
                            />
                        </div>
                    </section>
                </div>
            </footer>
        );
    }
}

export default Footer;