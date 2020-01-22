import React, { Component } from 'react';
import '../App.css';
import logo from '../Images/seologo.png';
import '@fortawesome/fontawesome-free/css/all.css'

class Header extends Component {
    render() {
        return (
            <header>
                <img src={logo} alt="SEO Logo" width="20%"/>
                <a href="https://www.facebook.com/koskenseo/" target="blank"><span className="fab fa-facebook"></span></a>
            </header>
        );
    }
}

export default Header;