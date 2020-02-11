import React, { Component } from 'react';
import { Container, Row } from 'react-bootstrap';
import '../App.css';

class Yritys extends Component {
    render() {
        return (
            <main id="company">
                <section id="companyUpper">
                    <div className="subHeader">
                        <h1>Yritys</h1>
                    </div>
                </section>
                <section id="companyLower">
                    <Container bsPrefix="storyContainer">
                        <Row>
                            <h2>Meidän tarina</h2>
                        </Row>
                        <Row>
                            <p>
                                Asemiemme tarkoituksena on tarjota perinteistä sekä kokonaisvaltaista huoltoasemapalvelua alueen asukkaille sekä, satunnaiskävijöille.<br/><br/>

                                Kosken Autohuolto Oy on vuonna 1995 perustettu perheyritys. Pekka Kanasuo ja Kai Lepistö ostivat huoltoaseman Kosken keskustasta. 
                                Huoltamotoiminnan lisäksi kysyntää oli myös kahvilalle, joten pian alkoi myös kahvion suunnittelu ja rakennus. Laajennuksen valmistuttua kahvion ovet avattiin vuonna 1998. 
                                Samalla yritys sai uuden yrittäjän Aila Lepistön. Myöhemmin toimintaa laajennettiin vielä rakentamalla autojen pikapesula. 
                                Kosken Autohuolto Oy eli tuttavallisemmin Kosken SEO työllistää tällä hetkellä, yrittäjien itsensä lisäksi, kuusi vakituista ja useamman osa-aikaisen työntekijän.<br/><br/>

                                Kosken SEO ja nykyisin myös Palikkakan SEO sijaitsevat ihanteellisilla paikoilla Kosken asukkaiden sekä ohikulkevien asiakkaiden kannalta. Asemamme tarjoavat asiakkailleen suuren valikoiman erilaisia tuotteita ja palveluja arjen tarpeisiin. 
                                Olemme kilpailukykyisiä suurten liikenneasemien rinnalla, erityisesti asiantunteva ja avulias henkilökunta sekä hyvä palvelu yhdistettynä perinteiseen huoltoasematunnelmaan ovat vahvuuksiamme. 
                                Laadukkaan huoltamotoiminnan lisäksi kahvioistamme saa joka päivä tuoreita leivonnaisia, joita on myös mahdollista tilata erilaisiin tilaisuuksiin. Keittiöissämme teemme päivittäin runsaan valikoiman erilaisia ruokia, pieneen tai suureen nälkään. 
                                Arkisin tarjolla on tottakai myös perinteistä kotiruokaa noutopöytälounaan muodossa.<br/><br/>
                                
                                Ystävällisin terveisin,<br/><br/>
                                
                                Aila, Pekka, Kai
                            </p>
                        </Row>
                    </Container>
                </section>
            </main>
        );
    }
}

export default Yritys;