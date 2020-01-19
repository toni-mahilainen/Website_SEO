import React, { Component } from 'react';
import '../App.css';
import { Carousel } from 'react-bootstrap';
import lataus from '../Images/lataus.jpg';
import lataus1 from '../Images/lataus1.jpg';
import lataus2 from '../Images/lataus2.jpg';

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
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block" src={lataus1} alt="Second slide" />
                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block" src={lataus2} alt="Third slide" />
                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </section>
                <section id="mainpageLower">
                    <div className="boxLinks">
                        <a className="box" href="#"><span>Yritys</span></a>
                        <a className="box" href="#"><span>Kahvila/Ravintola</span></a>
                        <a className="box" href="#"><span>Huoltamo</span></a>
                        <a className="box" href="#"><span>Palaute</span></a>
                    </div>
                </section>
            </main>
        );
    }
}

export default Etusivu;