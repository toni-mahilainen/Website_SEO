import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
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
// )(props => (
//     <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }} >
//         <Marker position={{ lat: -34.397, lng: 150.644 }} />
//     </GoogleMap>
// ));

class Footer extends Component {
    componentDidMount() {
        let screenwidth = window.screen.width;
        
        if (screenwidth < 992) {
            let hiddens = document.getElementsByClassName("footerHidden");

            for (let index = 0; index < hiddens.length; index++) {
                hiddens[index].classList.remove("hidden");
                hiddens[index].classList.add("visible");
            }
        }
    }

    heightUp() {
        let screenwidth = window.screen.width;
        
        if (screenwidth >= 992) {
            let footer = document.getElementById("footer");
            let hiddens = document.getElementsByClassName("footerHidden");

            for (let index = 0; index < hiddens.length; index++) {
                hiddens[index].classList.remove("hidden");
                hiddens[index].classList.add("visible");
            }

            footer.classList.remove("smallFooter");
            footer.classList.add("largeFooter");
        }
    }

    heightDown() {
        let screenwidth = window.screen.width;

        if (screenwidth >= 992) {
            let footer = document.getElementById("footer");
            let hiddens = document.getElementsByClassName("footerHidden");

            for (let index = 0; index < hiddens.length; index++) {
                hiddens[index].classList.remove("visible");
                hiddens[index].classList.add("hidden");
            }

            footer.classList.remove("largeFooter");
            footer.classList.add("smallFooter");
        }
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
                    <section id="openInfoBigScreen">
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
                    <section id="openInfoSmallScreen">
                        <h4>Aukioloajat</h4>
                        <Container bsPrefix="openInfoContainer footerHidden">
                            <Row>
                                <Col>
                                    <h5>SEO Koski</h5>
                                    <ul>
                                        <li>Ma - Pe</li>
                                        <li className="listTimes">06.00 - 19.00</li>
                                        <li>La</li>
                                        <li className="listTimes">08.00 - 16.00</li>
                                        <li>Su</li>
                                        <li className="listTimes">09.00 - 16.00</li>
                                    </ul>
                                </Col>
                                <Col>
                                    <h5>SEO Palikkala</h5>
                                    <ul>
                                        <li>Ma - Pe</li>
                                        <li className="listTimes">07.30 - 16.00</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section id="googleMap">
                        <h4>Sijainti</h4>
                        <div className="footerHidden" id="footerMap">
                            <iframe title="Kosken autohuolto Oy:n toimipaikat kartalla" src="https://www.google.com/maps/d/u/0/embed?mid=1apQ8Ch6OQ0LNuxhRXjcUYb8NiMZplyak&ll=60.755132,23.320535&z=9" center=""></iframe>
                        </div>
                    </section>
                </div>
                <div id="small" className="footerHidden">
                    <small>Developed By Toni Mahilainen</small>
                </div>
            </footer>
        );
    }
}

export default Footer;