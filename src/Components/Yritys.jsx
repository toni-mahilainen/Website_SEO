import React, { Component } from 'react';
import '../App.css';

class Tarina extends Component {
    render() {
        return (
            <header>
                <h1>Tarina</h1>
            </header>
        );
    }
}

class Kuvagalleria extends Component {
    render() {
        return (
            <header>
                <h1>Kuvagalleria</h1>
            </header>
        );
    }
}

class Henkilökunta extends Component {
    render() {
        return (
            <header>
                <h1>Henkilökunta</h1>
            </header>
        );
    }
}

class Yritys extends Component {
    constructor() {
        super();
        this.state = {
            StoryVisible: true,
            GalleryVisible: false,
            StaffVisible: false
        };
        this.handleNavClick = this.handleNavClick.bind(this);
    }

    handleNavClick(btn) {
        let btnId = btn.target.id;
        if (btnId === "storyBtn") {
            this.setState({
                StoryVisible: true,
                GalleryVisible: false,
                StaffVisible: false
            });
        } else if (btnId === "galleryBtn") {
            this.setState({
                StoryVisible: false,
                GalleryVisible: true,
                StaffVisible: false
            });
        } else if (btnId === "staffBtn") {
            this.setState({
                StoryVisible: false,
                GalleryVisible: false,
                StaffVisible: true
            });
        } else {
            alert("Tapahtui virhe! Ole hyvä ja lataa sivu uudelleen.");
        }
    }

    render() {
        return (
            <main id="company">
                <section id="companyUpper">
                    <div className="companyHeader">
                        <h1>Yritys</h1>
                    </div>
                    <div>
                        <ul id="companyNav">
                            <li><button id="storyBtn" onClick={this.handleNavClick}>Tarina</button><span>/</span></li>
                            <li><button id="galleryBtn" onClick={this.handleNavClick}>Kuvagalleria</button><span>/</span></li>
                            <li><button id="staffBtn" onClick={this.handleNavClick}>Henkilökunta</button></li>
                        </ul>
                    </div>
                </section>
                <section id="companyLower">
                    {this.state.StoryVisible ? <Tarina exampleRequest={this.state.ExampleRequestState} /> : null}
                    {this.state.GalleryVisible ? <Kuvagalleria exampleRequest={this.state.ExampleRequestState} /> : null}
                    {this.state.StaffVisible ? <Henkilökunta exampleRequest={this.state.ExampleRequestState} /> : null}
                </section>
            </main>
        );
    }
}

export default Yritys;