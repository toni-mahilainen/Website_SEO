import React, { Component } from 'react';
import '../App.css';

class Kahvila extends Component {
    render() {
        return (
            <header>
                <h1>Kahvila</h1>
            </header>
        );
    }
}

class Lounas extends Component {
    render() {
        return (
            <header>
                <h1>Lounas</h1>
            </header>
        );
    }
}

class Ravintola extends Component {
    render() {
        return (
            <header>
                <h1>Ravintola</h1>
            </header>
        );
    }
}

class KahvilaRavintola extends Component {
    constructor() {
        super();
        this.state = {
            CoffeeVisible: true,
            LunchVisible: false,
            RestaurantVisible: false
        };
        this.handleNavClick = this.handleNavClick.bind(this);
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
    
    render() {
        return (
            <main id="coffeeRestaurant">
                <section id="coffeeRestaurantUpper">
                    <div className="subHeader">
                        <h1>Kahvila / Ravintola</h1>
                    </div>
                    <div>
                        <ul className="subNav" id="coffeeRestaurantNav">
                            <li><button id="coffeeBtn" onClick={this.handleNavClick}>Kahvila</button><span>/</span></li>
                            <li><button id="lunchBtn" onClick={this.handleNavClick}>Lounas</button><span>/</span></li>
                            <li><button id="restaurantBtn" onClick={this.handleNavClick}>Ravintola</button></li>
                        </ul>
                    </div>
                </section>
                <section id="coffeeRestaurantLower">
                    {this.state.CoffeeVisible ? <Kahvila exampleRequest={this.state.ExampleRequestState} /> : null}
                    {this.state.LunchVisible ? <Lounas exampleRequest={this.state.ExampleRequestState} /> : null}
                    {this.state.RestaurantVisible ? <Ravintola exampleRequest={this.state.ExampleRequestState} /> : null}
                </section>
            </main>
        );
    }
}

export default KahvilaRavintola;