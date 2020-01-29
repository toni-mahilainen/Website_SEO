import React, { Component } from 'react';
import '../App.css';

class Palaute extends Component {
    render() {
        return (
            <main id="contact">
                <section id="contactUpper">
                    <div className="subHeader">
                        <h1>Palaute</h1>
                    </div>
                </section>
                <section id="contactLower">
                    <form>
                        <div id="formLeft">
                            Nimi<br />
                            <input type="text" /><br />
                            Sähköposti<br />
                            <input type="text" /><br />
                            Aihe<br />
                            <input type="text" /><br />
                            <button type="submit">Lähetä</button>
                        </div>
                        <div id="formRight">
                            Viesti<br />
                            <textarea></textarea><br />
                        </div>
                    </form>
                </section>
            </main>
        );
    }
}

export default Palaute;