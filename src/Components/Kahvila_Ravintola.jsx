import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import Lounaslista from './Lounaslista';

class Kahvila extends Component {
    render() {
        return (
            <div className="lowerSubHeader">
                <h1>Kahvila</h1>
            </div>
        );
    }
}

class Lounas extends Component {
    render() {
        return (
            <div>
                <Lounaslista />
            </div>
        );
    }
}

class Ravintola extends Component {
    render() {
        return (
            <div className="lowerSubHeader">
                <h1>Ravintola</h1>
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
                        <h1>Kahvila / Ravintola</h1>
                    </div>
                    <div>
                        <ul className="subNav" id="coffeeRestaurantNav">
                            <li><button id="coffeeBtn" onClick={this.handleNavClick}>Kahvila</button></li>
                            <li className="middleSubLink"><button id="lunchBtn" onClick={this.handleNavClick}>Lounas</button></li>
                            <li><button id="restaurantBtn" onClick={this.handleNavClick}>Ravintola</button></li>
                        </ul>
                        <select className="subDropdown" onChange={this.handleDropdownChange}>
                            <option value="coffee">Kahvila</option>
                            <option value="lunch">Lounas</option>
                            <option value="restaurant">Ravintola</option>
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