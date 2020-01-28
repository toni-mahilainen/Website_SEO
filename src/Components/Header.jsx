import React, { Component } from 'react';
import '../App.css';
import logo from '../Images/seologo.png';
import '@fortawesome/fontawesome-free/css/all.css'

class Header extends Component {
    render() {
        return (
            <header id="mainHeader">
                <a id="logoLink" href="/"><img src={logo} alt="SEO Logo" width="100%"/></a>
                <a id="facebook" href="https://www.facebook.com/koskenseo/" target="blank"><span className="fab fa-facebook"></span></a>
            </header>
        );
    }
}

export default Header;