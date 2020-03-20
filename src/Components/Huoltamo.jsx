import React, { Component } from 'react';
import '../App.css';
import { Container, Row, Col } from 'react-bootstrap';
import '@fortawesome/fontawesome-free/css/all.css'

class Huoltopalvelut extends Component {
    render() {
        return (
            <div>
                <Container bsPrefix="services">
                    <Row>
                        <h4>Palvelut</h4>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Kuva</h1>
                        </Col>
                        <Col id="servicesList">
                            <ul>
                                <li><span className="fas fa-circle"></span> Määräaikaishuollot</li>
                                <li><span className="fas fa-circle"></span> Öljynvaihdot</li>
                                <li><span className="fas fa-circle"></span> Renkaanvaihdot</li>
                                <li><span className="fas fa-circle"></span> Jarruhuollot</li>
                                <li><span className="fas fa-circle"></span> Katsastuspalvelu</li>
                                <li><span className="fas fa-circle"></span> Nelipyöräsuuntaukset</li>
                                <li><span className="fas fa-circle"></span> Ilmastointihuollot</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <Container bsPrefix="tests">
                    <Row>
                        <h4>Testit</h4>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Kuva</h1>
                        </Col>
                        <Col id="testList">
                            <ul>
                                <li><span className="fas fa-circle"></span> Jarrut</li>
                                <li><span className="fas fa-circle"></span> Iskarit</li>
                                <li><span className="fas fa-circle"></span> Pakokaasut</li>
                                <li><span className="fas fa-circle"></span> OBD</li>
                                <li><span className="fas fa-circle"></span> Vikakoodit</li>
                                <li><span className="fas fa-circle"></span> Valot</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

class Varaosat extends Component {
    render() {
        return (
            <div>
                <Container bsPrefix="spareParts">
                    <Row>
                        <h4>Varaosat</h4>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Kuva</h1>
                        </Col>
                        <Col id="servicesList">
                            <ul>
                                <li><span className="fas fa-circle"></span> Ajoneuvoon</li>
                                <li><span className="fas fa-circle"></span> Pienkoneeseen</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <Container bsPrefix="tyres">
                    <Row>
                        <h4>Renkaat</h4>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Kuva</h1>
                        </Col>
                        <Col id="testList">
                            <ul>
                                <li><span className="fas fa-circle"></span> Henkilöauto</li>
                                <li><span className="fas fa-circle"></span> Pakettiauto</li>
                                <li><span className="fas fa-circle"></span> Maasturi</li>
                                <li><span className="fas fa-circle"></span> Jotkin maatalouskoneet yms. Kysy lisätietoja!</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <Container bsPrefix="gas">
                    <Row>
                        <h4>Nestekaasut</h4>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Kuva</h1>
                        </Col>
                        <Col id="testList">
                            <ul>
                                <li><span className="fas fa-circle"></span> Grilliin</li>
                                <li><span className="fas fa-circle"></span> Trukkiin</li>
                                <li><span className="fas fa-circle"></span> Asuntoautoon</li>
                                <li><span className="fas fa-circle"></span> Veneeseen</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <Container bsPrefix="heatOil">
                    <Row>
                        <h4>Lämmitysöljyt</h4>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Kuva</h1>
                        </Col>
                        <Col id="testList">
                            <ul>
                                <li><span className="fas fa-circle"></span> Lisätietoja: Pekka 0400 - 826169</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

class Autopesu extends Component {
    render() {
        return (
            <div>
                <Container bsPrefix="carWashHall">
                    <Row>
                        <h4>Yleistä</h4>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Kuva</h1>
                        </Col>
                        <Col id="servicesList">
                            <ul>
                                <li><span className="fas fa-circle"></span> Esipesu korkeapaineella</li>
                                <li><span className="fas fa-circle"></span> Kaksikomponenttinen kuumavahaus</li>
                                <li><span className="fas fa-circle"></span> 10 harjallista pesuohjelmaa</li>
                                <li><span className="fas fa-circle"></span> Ajoneuvon maksimi koko
                                    <ul>
                                        <li className="nested"><span className="far fa-circle"></span> Korkeus: 2,7 m</li>
                                        <li className="nested"><span className="far fa-circle"></span> Leveys: 2,24 m</li>
                                        <li className="nested"><span className="far fa-circle"></span> Pituus: 5,5 m</li>
                                    </ul>
                                </li>
                                <li><span className="fas fa-circle"></span> Pesupassilla joka kuudes (6.) peruspesu ilmainen</li>
                                <li><span className="fas fa-circle"></span> Kysy omaa passia kassalta!</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
                <Container bsPrefix="washPrograms">
                    <Row>
                        <h4>Pesuohjelmat</h4>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Kuva</h1>
                        </Col>
                        <Col id="testList">
                            <ul>
                                <li><span className="fas fa-circle"></span> Perus</li>
                                <li><span className="fas fa-circle"></span> Super</li>
                                <li><span className="fas fa-circle"></span> Hyper</li>
                                <li><span className="fas fa-circle"></span> Ekstra</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
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
        this.handleDropdownChange = this.handleDropdownChange.bind(this);
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

    handleDropdownChange(select) {
        let selectValue = select.target.value;

        if (selectValue === "service") {
            this.setState({
                ServiceVisible: true,
                SparePartsVisible: false,
                CarWashVisible: false
            });
        } else if (selectValue === "spareParts") {
            this.setState({
                ServiceVisible: false,
                SparePartsVisible: true,
                CarWashVisible: false
            });
        } else if (selectValue === "carWash") {
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
                    <div className="subHeader">
                        <h1>Huoltamo</h1>
                    </div>
                    <div>
                        <ul className="subNav" id="serviceNav">
                            <li><button id="serviceBtn" onClick={this.handleNavClick}>Huoltopalvelut</button></li>
                            <li className="middleSubLink"><button id="sparePartsBtn" onClick={this.handleNavClick}>Varaosat</button></li>
                            <li><button id="carWashBtn" onClick={this.handleNavClick}>Autopesu</button></li>
                        </ul>
                        <select className="subDropdown" onChange={this.handleDropdownChange}>
                            <option value="service">Huoltopalvelut</option>
                            <option value="spareParts">Varaosat</option>
                            <option value="carWash">Autopesu</option>
                        </select>
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