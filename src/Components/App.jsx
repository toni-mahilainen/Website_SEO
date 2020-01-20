import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Etusivu from './Etusivu';
import Footer from './Footer';
import Yritys from './Yritys';
import KahvilaRavintola from './Kahvila_Ravintola';
import Huoltamo from './Huoltamo';
import Palaute from './Palaute';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Router>
                    <nav className="navbar navbar-expand-lg">
                        <ul className="navbar-nav mr-auto ml-auto">
                            <li><Link to={"/"} className="nav-link">Etusivu</Link></li>
                            <li><Link to={"/Yritys"} className="nav-link">Yritys</Link></li>
                            <li><Link to={"/Kahvila_Ravintola"} className="nav-link">Kahvila/Ravintola</Link></li>
                            <li><Link to={"/Huoltamo"} className="nav-link">Huoltamo</Link></li>
                            <li><Link to={"/Palaute"} className="nav-link">Palaute</Link></li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/" component={Etusivu} />
                        <Route path="/Yritys" component={Yritys} />
                        <Route path="/Kahvila_Ravintola" component={KahvilaRavintola} />
                        <Route path="/Huoltamo" component={Huoltamo} />
                        <Route path="/Palaute" component={Palaute} />
                    </Switch>
                </Router>
                <Footer />
            </div>
        );
    }
}

export default App;