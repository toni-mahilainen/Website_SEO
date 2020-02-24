import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';
import { Container, Row } from 'react-bootstrap';

class Palaute extends Component {
    constructor() {
        super();
        this.state = {
            Name: "",
            Email: "",
            Subject: "",
            Message: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.contactToBackend = this.contactToBackend.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.contactToBackend();
    }

    clearInputs() {
        let inputs = document.getElementsByClassName("contactInput");

        for (let index = 0; index < inputs.length; index++) {
            inputs[index].value = "";
        }
    }

    contactToBackend() {
        let uri = "https://emailsendercoreseo.azurewebsites.net/api/email";

        const messageObj = {
            name: this.state.Name,
            emailAddress: this.state.Email,
            subject: this.state.Subject,
            message: this.state.Message
        };

        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        };

        axios.post(uri, messageObj, headers
        ).then((response) => {
            if (response.status >= 200 && response.status < 300) {
                // alertin tilalle viesti käyttäjällä käyttöliittymään
                alert("Palaute lähetetty!");
                this.clearInputs();
            } else {
                alert("Jokin meni pieleen. Ole hyvä ja yritä uudelleen.")
            }
        })
    }

    handleChangeInput(input) {
        let inputField = input.target.id;
        let nameValue = input.target.value;
        let emailValue = input.target.value;
        let subjectValue = input.target.value;
        let messageValue = input.target.value;

        switch (inputField) {
            case "name":
                this.setState({
                    Name: nameValue
                });
                break;

            case "email":
                this.setState({
                    Email: emailValue
                });
                break;

            case "subject":
                this.setState({
                    Subject: subjectValue
                });
                break;

            case "message":
                this.setState({
                    Message: messageValue
                });
                break;

            default:
                break;
        }
    }

    render() {
        return (
            <main id="contact">
                <section id="contactUpper">
                    <div className="subHeader">
                        <h1>Palaute</h1>
                    </div>
                </section>
                <section id="contactLower">
                    <Container bsPrefix="contactContainer">
                        <Row id="textRow">
                            <p>
                                Kerro meille mielipiteesi tai kysy! <br/><br/>

                                Pyrimme kehittämään jatkuvasti toimintaamme ja sen vuoksi on erittäin tärkeää, että saamme palautetta toimintamme kehittämisen tueksi.<br/><br/>
                                
                                Kaikenlainen palaute on tervetullutta!
                            </p>
                        </Row>
                        <Row id="formRow">
                            <form onSubmit={this.handleSubmit}>
                                <div id="formLeft">
                                    Nimi<br />
                                    <input type="text" className="contactInput" id="name" onChange={this.handleChangeInput} /><br />
                                    Sähköposti<br />
                                    <input type="text" className="contactInput" id="email" onChange={this.handleChangeInput} /><br />
                                    Aihe<br />
                                    <input type="text" className="contactInput" id="subject" onChange={this.handleChangeInput} /><br />
                                    <button id="submitLargeScreen" type="submit">Lähetä</button>
                                </div>
                                <div id="formRight">
                                    Viesti<br />
                                    <textarea type="text" className="contactInput" id="message" onChange={this.handleChangeInput}></textarea><br />
                                    <button id="submitSmallScreen" type="submit">Lähetä</button>
                                </div>
                            </form>
                        </Row>
                    </Container>
                </section>
            </main>
        );
    }
}

export default Palaute;