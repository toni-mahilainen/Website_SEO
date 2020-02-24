import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import Lounaslista from './Lounaslista';

class Etusivu extends Component {
    render() {
        return (
            <main id="mainpage">
                <section id="mainpageLeft">
                    <div id="mainpageHeagerWrapper">
                        <div className="mainpageHeader">
                            <h1>Tervetuloa SEO Kosken kotisivuille</h1>
                        </div>
                    </div>
                    <div className="mainpageLunchDiv">
                        <Lounaslista />
                        <h4>LOUNASLISTA</h4>
                    </div>
                </section>
                <section id="mainpageRight">
                    <div id="infoSide">
                        <Container bsPrefix="InfoContainer">
                            <Row>
                                <Col>
                                    <h4>Aukioloajat</h4>
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
                            </Row>
                            <Row>
                                <Col>
                                    <h5>SEO Palikkala</h5>
                                    <ul>
                                        <li>Maanantai - Perjantai</li>
                                        <li className="listTimes">07.30 - 16.00</li>
                                    </ul>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col>
                                    <h4>Yhteystiedot</h4>
                                    <address>
                                        Kosken Autohuolto Oy <br />
                                        Hämeentie 2  <br />
                                        31500, Koski TL <br />
                                        info@koskenseo.fi <br />
                                        (02) 4841 625 (kahvila) <br />
                                        (02) 4841 690 (huolto) <br />
                                        (02) 4846 266 (kahvila / Palikkala)
                            </address>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </section>
            </main>
        );
    }
}

export default Etusivu;