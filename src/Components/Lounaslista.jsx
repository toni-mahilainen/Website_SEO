import React, { Component } from 'react';
import '../App.css';
import axios from 'axios';

class Lounaslista extends Component {
    constructor() {
        super();
        this.state = {
            LunchList: "",
            Error: ""
        };
    }

    componentDidMount() {
        this.getFacebookFeed();
    }

    getFacebookFeed() {
        // lähetetään GET -pyyntö facebookin Graph API:lle
        // Parametreina page ID, posts (jotta saadaan vastauksena julkiset julkaisut) sekä Access Token, joka varmistaa tunnistautumisen
        axios.get('https://graph.facebook.com/106628357569438/posts?', /* OMA */
            // axios.get('https://graph.facebook.com/792968771068499/posts?', /* SEO */
            {
                params: {
                    /* OMA */ access_token: "EAAI41FdBRxwBAMTuA8V8RKhNeNAk2aCbxSR3sNeIIoIppLnx1ZBTz8DuKyivvDoy0X57SR72BEwZBTpXlJQHkDfjFNdZATUfIO2NnNEN3H6OjYU7HTmV2SYZBodhqyMXQJcxg6U28kIGohRJGOvYOT9bdiCZA8kfzmyCsgcKZCFwZDZD"
                    // /* SEO */ access_token: "EAAI41FdBRxwBALZBOCuPTc60e8YyJEjrSy97nRvXZBzTq6BXfIKadEgYF6tBnPHCMSokeH6w8yOsQJZALB49pYn8i8MiguOYhDaZBflivfKwiZCHXaMUY2Rq9eLFLQTALZAudyaZBbaNRwZAWUDvAyh0oW51OZAndEsFjeTFUZCfokCgZDZD"
                }
            })
            .then(response => {
                // Vastaus palvelimelta JSON-muodossa, josta sijoitetaan julkaisut muuttujaan
                if (response.status >= 200 && response.status < 300) {
                    let data = response.data.data;

                    for (let index = 0; index < data.length; index++) {
                        // Käydään kaikki julkaisut läpi silmukassa
                        let message = data[index].message;
                        if (message) {
                            // Jos julkaisussa on tekstiä ja jos se alkaa sanalla LOUNAS (rightMessage = true/false), sijoitetaan se tila muuttujaan
                            let rightMessage = message.startsWith("LOUNAS");
                            if (rightMessage) {
                                this.setState({
                                    LunchList: message
                                });
                            }
                        }
                    }
                } else {
                    this.setState({
                        LunchList: "",
                        Error: "Lounaslistan lataus epäonnistui. Ole hyvä ja yritä myöhemmin uudelleen."
                    });
                }

            })
    }

    render() {
        // Pilkotaan merkkijono sopivalla tavalla osiin myöhempää käsittelyä varten
        if (this.state.LunchList === "") {
            let error = this.state.Error;
            return (
                <div id="lunchMain">
                    <h2 id="tblLunchList">
                        {error}
                    </h2>
                </div>
            );
        } else {
            let lunchListArray = this.state.LunchList.split("| ");
            return (
                <div id="lunchMain">
                    <table id="tblLunchList">
                        <thead>
                            <tr>
                                <th>{lunchListArray[0]}</th>
                            </tr>
                            <tr>
                                <th>{lunchListArray[1]}</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{lunchListArray[2]}</td>
                            </tr>
                            <tr>
                                <td>{lunchListArray[3]}</td>
                            </tr>
                            <tr>
                                <td>{lunchListArray[4]}</td>
                            </tr>
                            <tr>
                                <td>{lunchListArray[5]}</td>
                            </tr>
                            <tr>
                                <td>{lunchListArray[6]}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            );
        }
    }
}

export default Lounaslista;