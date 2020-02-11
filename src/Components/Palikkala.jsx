import React, { Component } from 'react';
import '../App.css';

class Lounas extends Component {
    render() {
        return (
            <header>
                <h1>Lounas</h1>
            </header>
        );
    }
}

class Kahvio extends Component {
    render() {
        return (
            <header>
                <h1>Kahvio + Tarvikemyynti</h1>
            </header>
        );
    }
}

class Polttoaineet extends Component {
    render() {
        return (
            <header>
                <h1>Polttoaineet + Nestekaasu</h1>
            </header>
        );
    }
}

class Palikkala extends Component {
    constructor() {
        super();
        this.state = {
            LunchVisible: true,
            CafeteriaVisible: false,
            FuelVisible: false
        };
        this.handleNavClick = this.handleNavClick.bind(this);
    }

    handleNavClick(btn) {
        let btnId = btn.target.id;
        if (btnId === "lunchBtn") {
            this.setState({
                LunchVisible: true,
                CafeteriaVisible: false,
                FuelVisible: false
            });
        } else if (btnId === "cafeteriaBtn") {
            this.setState({
                LunchVisible: false,
                CafeteriaVisible: true,
                FuelVisible: false
            });
        } else if (btnId === "fuelBtn") {
            this.setState({
                LunchVisible: false,
                CafeteriaVisible: false,
                FuelVisible: true
            });
        } else {
            alert("Tapahtui virhe! Ole hyvä ja lataa sivu uudelleen.");
        }
    }

    render() {
        return (
            <main id="palikkala">
                <section id="palikkalaUpper">
                    <div className="subHeader">
                        <h1>SEO Palikkala</h1>
                    </div>
                    <div>
                        <ul className="subNav">
                            <li><button id="lunchBtn" onClick={this.handleNavClick}>Lounas</button><span>/</span></li>
                            <li><button id="cafeteriaBtn" onClick={this.handleNavClick}>Kahvio + tarvikemyynti</button><span>/</span></li>
                            <li><button id="fuelBtn" onClick={this.handleNavClick}>Polttoaineet + nestekaasu</button></li>
                        </ul>
                    </div>
                </section>
                <section id="palikkalaLower">
                    {this.state.LunchVisible ? <Lounas exampleRequest={this.state.ExampleRequestState} /> : null}
                    {this.state.CafeteriaVisible ? <Kahvio exampleRequest={this.state.ExampleRequestState} /> : null}
                    {this.state.FuelVisible ? <Polttoaineet exampleRequest={this.state.ExampleRequestState} /> : null}
                </section>
            </main>
        );
    }
}

export default Palikkala;