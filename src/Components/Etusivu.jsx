import React, { Component } from 'react';
import '../App.css';
import { Carousel } from 'react-bootstrap';
import lataus from '../Images/lataus.jpg';
import lataus1 from '../Images/lataus1.jpg';
import lataus2 from '../Images/lataus2.jpg';
import MapContainer from './GoogleMap';

class Etusivu extends Component {
    render() {
        return (
            <main id="mainpage">
                <section id="mainpageUpper">
                    <Carousel bsPrefix="carousel">
                        <Carousel.Item>
                            <img className="d-block" src={lataus} alt="First slide" />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Kuva 1</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block" src={lataus1} alt="Second slide" />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Kuva 2</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block" src={lataus2} alt="Third slide" />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Kuva3</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </section>
                <section id="mainpageLower">
                    <div className="mainpageHeader">
                        <h1>Tervetuloa SEO Kosken kotisivuille</h1>
                    </div>
                    <div className="boxLinks">
                        <a className="box" href="Yritys"><span>Yritys</span></a>
                        <a className="box" href="Kahvila_Ravintola"><span>Kahvila/Ravintola</span></a>
                        <a className="box" href="Huoltamo"><span>Huoltamo</span></a>
                        <a className="box" href="Palaute"><span>Palaute</span></a>
                    </div>
                </section>
            </main>
        );
    }
}

export default Etusivu;