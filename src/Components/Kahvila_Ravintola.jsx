import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Lounaslista from './Lounaslista';
import { Container, Row, Col } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.css'

class Kahvila extends Component {
    render() {
        return (
            <Container bsPrefix="cafeteria">
                <Row>
                    <Col>
                        <h4>Meiltä aamulla leivotut tuoreet leivonnaiset joka päivä!</h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h1>Kuva</h1>
                    </Col>
                    <Col id="pasteries">
                        <ul>
                            <li><span className="fas fa-circle"></span> Munkit</li>
                            <li><span className="fas fa-circle"></span> Pullat</li>
                            <li><span className="fas fa-circle"></span> Viinerit</li>
                            <li><span className="fas fa-circle"></span> Täytetyt sämpylät</li>
                            <li><span className="fas fa-circle"></span> Piirakat</li>
                            <li><span className="fas fa-circle"></span> Kakut</li>
                        </ul>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h4>Myymme leivonnaisia mukaan sekä myös tilauksesta!</h4>
                    </Col>
                </Row>
            </Container>
        );
    }
}

class Lounas extends Component {
    render() {
        return (
            <div id="lunchWrapper">
                <Container bsPrefix="lunchLeft">
                    <Row>
                        <Col>
                            <h4>Kotitekoinen ja perinteinen lounas joka arkipäivä!</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Kuva</h1>
                        </Col>
                        <Col>
                            <h1>Kuva</h1>
                        </Col>
                    </Row>
                </Container>
                <Lounaslista />
            </div>
        );
    }
}

class Ravintola extends Component {
    render() {
        return (
            <div id="kitchenWrapper">
                <Container bsPrefix="kitchenLeft">
                    <Row>
                        <Col>
                            <h4>X Meal <br/> hampurilaiset ja ateriat</h4>
                            <h1>Kuva</h1>
                        </Col>
                        <Col>
                            <h4>Seon possunleike pippurikastikkeella</h4>
                            <h1>Kuva</h1>
                        </Col>
                    </Row>
                </Container>
                <Container bsPrefix="kitchenRight">
                    <Row>
                        <Col>
                            <h4>Pizzat</h4>
                            <h5>4 täytettä oman valinnan mukaan</h5>
                        </Col>
                    </Row>
                    <Row id="fillings">
                        <Col>
                            <ul>
                                <li>Ananas</li>
                                <li>Aurajuusto</li>
                                <li>Broileri</li>
                                <li>Fetajuusto</li>
                                <li>Herkkusieni</li>
                                <li>Jalopeno</li>
                                <li>Jauheliha</li>
                                <li>Kananmuna</li>
                                <li>Katkarapu</li>
                            </ul>
                        </Col>
                        <Col>
                            <ul>
                                <li>Kebab</li>
                                <li>Kinkku</li>
                                <li>Paprika</li>
                                <li>Salami</li>
                                <li>Sipuli</li>
                                <li>Suolakurkku</li>
                                <li>Tomaatti</li>
                                <li>Tonnikala</li>
                                <li>Valkosipuli</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

class KahvilaRavintola extends Component {
    constructor() {
        super();
        this.state = {
            CoffeeVisible: true,
            LunchVisible: false,
            RestaurantVisible: false,
            LunchList: ""
        };
        this.handleNavClick = this.handleNavClick.bind(this);
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
    }

    getFacebookFeed() {
        // lähetetään GET -pyyntö facebookin Graph API:lle
        // Parametreina page ID, posts (jotta saadaan vastauksena julkiset julkaisut) sekä Access Token, joka varmistaa tunnistautumisen
        axios.get('https://graph.facebook.com/106628357569438/posts?', /* OMA */
            // axios.get('https://graph.facebook.com/792968771068499/posts?', /* SEO */
            {
                params: {
                    /* OMA */ access_token: "EAAI41FdBRxwBAMTuA8V8RKhNeNAk2aCbxSR3sNeIIoIppLnx1ZBTz8DuKyivvDoy0X57SR72BEwZBTpXlJQHkDfjFNdZATUfIO2NnNEN3H6OjYU7HTmV2SYZBodhqyMXQJcxg6U28kIGohRJGOvYOT9bdiCZA8kfzmyCsgcKZCFwZDZD"
                    // /* SEO */ access_token: "EAAI41FdBRxwBALZBOCuPTc60e8YyJEjrSy97nRvXZBzTq6BXfIKadEgYF6tBnPHCMSokeH6w8yOsQJZALB49pYn8i8MiguOYhDaZBflivfKwiZCHXaMUY2Rq9eLFLQTALZAudyaZBbaNRwZAWUDvAyh0oW51OZAndEsFjeTFUZCfokCgZDZD"
                }
            })
            .then(response => {
                // Vastaus palvelimelta JSON-muodossa, josta sijoitetaan julkaisut muuttujaan
                let data = response.data.data;

                for (let index = 0; index < data.length; index++) {
                    // Käydään kaikki julkaisut läpi silmukassa
                    let message = data[index].message;
                    if (message) {
                        // Jos julkaisussa on tekstiä ja jos se alkaa sanalla LOUNAS (rightMessage = true/false), sijoitetaan se tila muuttujaan
                        let rightMessage = message.startsWith("LOUNAS");
                        if (rightMessage) {
                            this.setState({
                                LunchList: message
                            });
                        }
                    }
                }
            })
    }

    componentDidMount() {
        this.getFacebookFeed();
    }

    handleNavClick(btn) {
        let btnId = btn.target.id;
        if (btnId === "coffeeBtn") {
            this.setState({
                CoffeeVisible: true,
                LunchVisible: false,
                RestaurantVisible: false
            });
        } else if (btnId === "lunchBtn") {
            this.setState({
                CoffeeVisible: false,
                LunchVisible: true,
                RestaurantVisible: false
            });
        } else if (btnId === "restaurantBtn") {
            this.setState({
                CoffeeVisible: false,
                LunchVisible: false,
                RestaurantVisible: true
            });
        } else {
            alert("Tapahtui virhe! Ole hyvä ja lataa sivu uudelleen.");
        }
    }

    handleDropdownChange(select) {
        let selectValue = select.target.value;

        if (selectValue === "coffee") {
            this.setState({
                CoffeeVisible: true,
                LunchVisible: false,
                RestaurantVisible: false
            });
        } else if (selectValue === "lunch") {
            this.setState({
                CoffeeVisible: false,
                LunchVisible: true,
                RestaurantVisible: false
            });
        } else if (selectValue === "restaurant") {
            this.setState({
                CoffeeVisible: false,
                LunchVisible: false,
                RestaurantVisible: true
            });
        } else {
            alert("Tapahtui virhe! Ole hyvä ja lataa sivu uudelleen.");
        }
    }

    render() {
        return (
            <main id="coffeeRestaurant">
                <section id="coffeeRestaurantUpper">
                    <div className="subHeader">
                        <h1>Kahvila / Keittiö</h1>
                    </div>
                    <div>
                        <ul className="subNav" id="coffeeRestaurantNav">
                            <li><button id="coffeeBtn" onClick={this.handleNavClick}>Kahvila</button></li>
                            <li className="middleSubLink"><button id="lunchBtn" onClick={this.handleNavClick}>Lounas</button></li>
                            <li><button id="restaurantBtn" onClick={this.handleNavClick}>Keittiö</button></li>
                        </ul>
                        <select className="subDropdown" onChange={this.handleDropdownChange}>
                            <option value="coffee">Kahvila</option>
                            <option value="lunch">Lounas</option>
                            <option value="restaurant">Keittiö</option>
                        </select>
                    </div>
                </section>
                <section id="coffeeRestaurantLower">
                    {this.state.CoffeeVisible ? <Kahvila exampleRequest={this.state.ExampleRequestState} /> : null}
                    {this.state.LunchVisible ? <Lounas exampleRequest={this.state.ExampleRequestState} lunchListProp={this.state.LunchList} /> : null}
                    {this.state.RestaurantVisible ? <Ravintola exampleRequest={this.state.ExampleRequestState} /> : null}
                </section>
            </main>
        );
    }
}

export default KahvilaRavintola;