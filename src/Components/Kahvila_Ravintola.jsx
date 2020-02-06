import React, { Component } from 'react';
import '../App.css';
// import axios from 'axios';

class Kahvila extends Component {
    render() {
        return (
            <div className="sectionHeader">
                <h1>Kahvila</h1>
            </div>
        );
    }
}

class Lounas extends Component {
    render() {
        return (
            <div>
                <div className="sectionHeader">
                    <h1>Lounas</h1>
                </div>
                {
                    // <div id="lunchMain">
                    //     <p>{this.props.lunchListProp}</p>
                    // </div>
                }
            </div>
        );
    }
}

class Ravintola extends Component {
    render() {
        return (
            <div className="sectionHeader">
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
            RestaurantVisible: false
            // LunchList: ""
        };
        this.handleNavClick = this.handleNavClick.bind(this);
    }

    // getFacebookFeed() {
    //     axios.get('https://graph.facebook.com/277905558897434/posts?',
    //         {
    //             params: {
    //                 access_token: "625434601539356|80a12dc951b0ddd6e8ed462f8c673ee8"
    //                 // access_token: "EAAI41FdBRxwBAP8vVZCTi2ZB6cYGRVOIcvvoo9MHzMLXnIm3vxGtkqDZBhEbSZBaXhe4BYuzHRp5SVrpZCeYvuz0l9SnGuWueevL7ShSkMLrrDNkgPbsOM5kfGaU4l0OrYvPnVqWqHvyvYLO10rQ3u1UQfV5umJU6pKTaNqLlUgZDZD"
    //             }
    //         })
    //         .then(response => {
    //             let data = response.data.data;

    //             for (let index = 0; index < data.length; index++) {
    //                 let message = data[index].message;
    //                 if (message) {
    //                     let rightMessage = message.startsWith("Leipurityttö");
    //                     if (rightMessage) {
    //                         this.setState({
    //                             LunchList: message
    //                         });
    //                     }
    //                 }
    //             }
    //         })
    // }

    // componentDidMount() {
    //     this.getFacebookFeed();
    // }

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
                    {this.state.LunchVisible ? <Lounas exampleRequest={this.state.ExampleRequestState} /* lunchListProp={this.state.LunchList} */ /> : null}
                    {this.state.RestaurantVisible ? <Ravintola exampleRequest={this.state.ExampleRequestState} /> : null}
                </section>
            </main>
        );
    }
}

export default KahvilaRavintola;