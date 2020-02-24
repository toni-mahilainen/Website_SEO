import React, { Component } from 'react';
import '../App.css';
import logo from '../Images/seologo-3.png';
import '@fortawesome/fontawesome-free/css/all.css'

class Header extends Component {
    render() {
        return (
            <header id="mainHeader">
                <div id="headerLeft"></div>
                <div id="headerMiddle">
                    <a id="logoLink" href="/"><img src={logo} alt="SEO Logo" width="100%" /></a>
                </div>
                <div id="headerRight">
                    <a id="facebook" href="https://www.facebook.com/koskenseo/" target="blank"><span className="fab fa-facebook"></span></a>
                </div>
            </header>
        );
    }
}

export default Header;