import React, { Component } from 'react';
import '../App.css';

class Palaute extends Component {
    render() {
        return (
            <main id="palaute">
                <h1>Palaute</h1>
                <form>
                    Nimi<br/>
                    <input type="text"/><br/>
                    Sähköposti<br/>
                    <input type="text"/><br/>
                    Aihe<br/>
                    <input type="text"/><br/>
                    Viesti<br/>
                    <textarea cols="40" rows="10"></textarea><br/>
                    <button type="submit">Lähetä</button>
                </form>
            </main>
        );
    }
}

export default Palaute;