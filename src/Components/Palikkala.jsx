import React, { Component } from 'react';
import '../App.css';
import Lounaslista from './Lounaslista';

class Lounas extends Component {
    render() {
        return (
            <header>
                <Lounaslista
                    token="EAAI41FdBRxwBAGO4MSj4mMPwpWuJ3f9iZA05R0VaNSjEHIiGZC0ME6mokRvHls1Gyc53PMwKByrCw5vkN0oxm15hDqTrnInBsbp84WpOkDNRFJHmdFdLdaIFmOL2EsEK4My7mjolqAdMFZCKH2OTZAuaKulnlijp988hEz9k4wZDZD"
                    pageId="105259191116036"
                />
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
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
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

    handleDropdownChange(select) {
        let selectValue = select.target.value;

        if (selectValue === "lunch") {
            this.setState({
                LunchVisible: true,
                CafeteriaVisible: false,
                FuelVisible: false
            });
        } else if (selectValue === "cafeteria") {
            this.setState({
                LunchVisible: false,
                CafeteriaVisible: true,
                FuelVisible: false
            });
        } else if (selectValue === "fuel") {
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
                            <li><button id="lunchBtn" onClick={this.handleNavClick}>Lounas</button></li>
                            <li className="middleSubLink"><button id="cafeteriaBtn" onClick={this.handleNavClick}>Kahvio + tarvikemyynti</button></li>
                            <li><button id="fuelBtn" onClick={this.handleNavClick}>Polttoaineet + nestekaasu</button></li>
                        </ul>
                        <select className="subDropdown" onChange={this.handleDropdownChange}>
                            <option value="lunch">Lounas</option>
                            <option value="cafeteria">Kahvio + tarvikemyynti</option>
                            <option value="fuel">Polttoaineet + nestekaasu</option>
                        </select>
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