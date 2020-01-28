import React, { Component } from 'react';
import '../App.css';
import { Container } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import MapContainer from './GoogleMap';

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
                                        <li className="listDays">06.00 - 19.00</li>
                                        <li>Lauantai</li>
                                        <li className="listDays">08.00 - 16.00</li>
                                        <li>Sunnuntai</li>
                                        <li className="listDays">09.00 - 16.00</li>
                                    </ul>
                                </Col>
                                <Col>
                                    <h5>SEO Palikkala</h5>
                                    <ul>
                                        <li>Maanantai - Perjantai</li>
                                        <li className="listDays">07.30 - 16.00</li>
                                    </ul>
                                </Col>
                            </Row>
                        </Container>
                    </section>
                    <section id="googleMap">
                        <h4>Sijainti</h4>
                        <div className="footerHidden">
                            <MapContainer />
                        </div>
                    </section>
                </div>
            </footer>
        );
    }
}

export default Footer;