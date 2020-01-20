import React, { Component } from 'react';
import '../App.css';

class Huoltopalvelut extends Component {
    render() {
        return (
            <header>
                <h1>Huoltopalvelut</h1>
            </header>
        );
    }
}

class Varaosat extends Component {
    render() {
        return (
            <header>
                <h1>Varaosat</h1>
            </header>
        );
    }
}

class Autopesu extends Component {
    render() {
        return (
            <header>
                <h1>Autopesu</h1>
            </header>
        );
    }
}

class Huoltamo extends Component {
    constructor() {
        super();
        this.state = {
            ServiceVisible: true,
            SparePartsVisible: false,
            CarWashVisible: false
        };
        this.handleNavClick = this.handleNavClick.bind(this);
    }

    handleNavClick(btn) {
        let btnId = btn.target.id;
        if (btnId === "serviceBtn") {
            this.setState({
                ServiceVisible: true,
                SparePartsVisible: false,
                CarWashVisible: false
            });
        } else if (btnId === "sparePartsBtn") {
            this.setState({
                ServiceVisible: false,
                SparePartsVisible: true,
                CarWashVisible: false
            });
        } else if (btnId === "carWashBtn") {
            this.setState({
                ServiceVisible: false,
                SparePartsVisible: false,
                CarWashVisible: true
            });
        } else {
            alert("Tapahtui virhe! Ole hyvä ja lataa sivu uudelleen.");
        }
    }
    render() {
        return (
            <main id="service">
                <section id="serviceUpper">
                    <div className="serviceHeader">
                        <h1>Huoltamo</h1>
                    </div>
                    <div>
                        <ul id="serviceNav">
                            <li><button id="serviceBtn" onClick={this.handleNavClick}>Huoltopalvelut</button><span>/</span></li>
                            <li><button id="sparePartsBtn" onClick={this.handleNavClick}>Varaosat</button><span>/</span></li>
                            <li><button id="carWashBtn" onClick={this.handleNavClick}>Autopesu</button></li>
                        </ul>
                    </div>
                </section>
                <section id="serviceLower">
                    {this.state.ServiceVisible ? <Huoltopalvelut exampleRequest={this.state.ExampleRequestState} /> : null}
                    {this.state.SparePartsVisible ? <Varaosat exampleRequest={this.state.ExampleRequestState} /> : null}
                    {this.state.CarWashVisible ? <Autopesu exampleRequest={this.state.ExampleRequestState} /> : null}
                </section>
            </main>
        );
    }
}

export default Huoltamo;