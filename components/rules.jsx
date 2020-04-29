class CommonRules extends React.Component {
    render() {
        return (
            <React.Fragment>
                <RuleContainer>
                    <Rule>
                    <Icon icon="denied"/>
                    <Content>
                        <Heading>Hack-clientit ovat kiellettyjä</Heading>
                        <Description>
                            Huijausohjelmien (esim. Xray) käyttäminen on kiellettyä.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                    <Icon icon="denied"/>
                    <Content>
                        <Heading>Modit ovat kiellettyjä</Heading>
                        <Description>
                            Pelin etenemistä edistävien modien käyttäminen (esim. schematica) on kiellettyä.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                    <Icon icon="allowed"/>
                    <Content>
                        <Heading>Optifine</Heading>
                        <Description>
                            Optifine, ja Optifinen kaltaiset suoritustehoa parantavat modit ovat sallittuja.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                    <Icon icon="denied"/>
                    <Content>
                        <Heading>Asiattoman skinin tai käyttäjänimen käyttäminen on kiellettyä</Heading>
                        <Description>
                            Jos nimesi tai skinisi on rasistinen, alatyylinen, loukkaava, tai muuten asiaton, sinua pyydetään vaihtamaan se.
                            Muuten käyttäjäsi bannitaan skinin tai nimen vaihdon ajaksi.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                    <Icon icon="denied"/>
                    <Content>
                        <Heading>Alt-accounttien hyväksikäyttäminen kielletty</Heading>
                        <Description>
                            Et saa käyttää alt-accountteja pääkäyttäjän edun hyväksi (esimerkiksi rahan siirtämistä, tai rankkien ominaisuuksien jakamista).
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                    <Icon icon="denied"/>
                    <Content>
                        <Heading>Afkaaminen kielletty</Heading>
                        <Description>
                            Palvelimella afkaaminen on kielletty. Afkikoneiden rakentaminen tästä syystä myös ankarasti kielletty. <br/>
                            
                            Mobifarmeilla afkaaminen keräten mobeja on myös kiellettyä. Kuitenkin automaattiset mobifarmit on sallittuja,
                            kunhan entiteettejä ei keräänny liikaa aiheuttaakseen lagia.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                    <Icon icon="denied"/>
                    <Content>
                        <Heading>Palvelimen lagittaminen kielletty</Heading>
                        <Description>
                            Palvelinta rasittavien ja lagittavien redstonerakennelmien teko on kielletty (esim. loputtomiin käyvät kellot, 0-tick farmit).
                            Lisää rakennelmaan sulkemisvipu ja pidä laite suljettuna, jos se ei ole käytössä.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                    <Icon icon="denied"/>
                    <Content>
                        <Heading>Ansaitun rankin hyväksikäyttäminen kielletty</Heading>
                        <Description>
                            Sinua alempirankkiset pelaajat eivät saa hyötyä rankkisi ominaisuuksista. Et saa esimerkiksi muuntaa spawnerin tyyppiä toisten puolesta,
                            tai myydä spawnereita, joihin pelaajalla ei ole vielä oikeutta.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                    <Icon icon="notice"/>
                    <Content>
                        <Heading>Olet velvoitettu ilmoittamaan rikkeestä</Heading>
                        <Description>
                            Jos havaitset sääntöjen rikkomista, välitä tieto välittömästi ylläpidolle. Pyri hankkimaan todisteita, kuten screenshotteja tai videoita.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>
           </React.Fragment>
        )
    }
}

class ChatRules extends React.Component {
    render() {
        return (
            <React.Fragment>
                <RuleContainer>
                    <Rule>
                    <Icon icon="important"/>
                    <Content>
                        <Heading>Pidetään keskustelut asiallisena</Heading>
                        <Description>
                            Muista, että keskustelet oikeiden ihmisten kanssa. Pyritään olemaan mahdollisimman ystävällisiä toisillemme.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>

                <RuleContainer>
                    <Rule>
                    <Icon icon="important"/>
                    <Content>
                        <Heading>Pidetään kieli kurissa</Heading>
                        <Description>
                            Turha kiroilu ja toisten pelaajien härnäminen tai kiusaaminen ei ole asianmukaista. Ollaanhan ihmisiksi.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>

                <RuleContainer>
                    <Rule>
                    <Icon icon="important"/>
                    <Content>
                        <Heading>Pidetään chatti siistinä</Heading>
                        <Description>
                            Turha spammaaminen, floodaaminen, ja CAPSILLA KIRJOITTAMINEN on kiellettyä.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                    <Icon icon="denied"/>
                    <Content>
                        <Heading>Mainostaminen on kiellettyä</Heading>
                        <Description>
                            Älä mainosta (varsinkaan toisia palvelimia). Tämä ei kuitenkaan tarkoita sitä ettetkö saisi kertoa minkä merkkinen hiiri tai auto sinulla on,
                            mutta siinä se raja sitten kulkeekin.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>
            </React.Fragment>
        )
    }
}

class AdditionalRules extends React.Component {
    render() {
        return (
            <React.Fragment>
                <RuleContainer>
                    <Rule>
                    <Icon icon="denied"/>
                    <Content>
                        <Heading>Grieffaaminen on kielletty</Heading>
                        <Description>
                            Toisten pelaajien rakennelmien tuhoaminen ja omaisuuden varastaminen on kielletty.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                    <Icon icon="denied"/>
                    <Content>
                        <Heading>Pelaajien vedättäminen, skämmääminen on kiellettyä</Heading>
                        <Description>
                            Et saa esimerkiksi huijata toiselta tavaraa.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                    <Icon icon="denied"/>
                    <Content>
                        <Heading>Maisemagrieffaaminen kielletty</Heading>
                        <Description>
                            Maaston ja maiseman turmeleminen on kiellettyä. Puut on kasvastettava takaisin, hiekan hakkuu ei saa jättää rumia jälkiä ympäristöön,
                            turhien epäesteettisten rakennelmien rakentaminen on kielletty (esim. 1x1 dirt tornit).
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                    <Icon icon="notice"/>
                    <Content>
                        <Heading>Villager kylät ovat rauhoitettuja</Heading>
                        <Description>
                            Villager kyliä ei saa grieffata. Kylistä ei saa viedä sänkyjä tai workstationeja. Kylien peltoja saa käyttää, kunhan ne muistaa täyttää
                            takaisin. Kylien heinäpaalut, sekä kellot saa ottaa itselleen. Kylän voi ottaa kodikseen, jolloin kyliä koskevat säännöt eivät enää päde.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                    <Icon icon="denied"/>
                    <Content>
                        <Heading>Pelaajien tappaminen ja pelaaja-ansojen rakentaminen kielletty</Heading>
                        <Description>
                            Et saa aiheuttaa vahinkoa toisiin pelaajiin. Rakennelmat, jotka voivat tappaa pelaajan, ovat ankarasti kiellettyjä.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>


                <RuleContainer>
                    <Rule>
                    <Icon icon="denied"/>
                    <Content>
                        <Heading>Pelaajakylien mainostaminen on kielletty</Heading>
                        <Description>
                            Kylän tyrkyttäminen toisille pelaajille on kielletty. Tarkennus tulossa.
                        </Description>
                    </Content>
                    </Rule>
                </RuleContainer>
            </React.Fragment>
        )
    }
}

const RuleContainer = (props) => {
    return (
        <div className="rule-container">
            {props.children}
        </div>
    )
}

const Rule = (props) => {
    return (
        <div className="rule">
            {props.children}
        </div>
    )
}

const Heading = (props) => {
    return (
        <div className="rule-head">
            <h3 className="rule-heading">
                {props.children}
            </h3>
        </div>
    )
}

const Content = (props) => {
    return (
        <div className="rule-content">
            {props.children}
        </div>
    )
}

const Description = (props) => {
    return (
        <div className="rule-specify">
            <div className="rule-spefier">
                {props.children}
            </div>
        </div>
    )
}

const Icon = (props) => {
    if (props.icon == "denied") {
        return (
            <div className="rule-icon-parent">
                <div className="rule-icon denied">
                    <i className="fas fa-times"></i>
                </div>
            </div>
        )
    } else if (props.icon == "notice") {
        return (
            <div className="rule-icon-parent">
                <div className="rule-icon notice">
                    <i className="fas fa-exclamation"></i>
                </div>
            </div>
        )
    } else if (props.icon == "allowed") {
        return (
            <div className="rule-icon-parent">
                <div className="rule-icon accepted">
                    <i className="fas fa-check"></i>
                </div>
            </div>
        )
    } else if (props.icon == "important") {
        return (
            <div className="rule-icon-parent">
                <div className="rule-icon keep-in-mind">
                    <i className="fas fa-exclamation"></i>
                </div>
            </div>
        )
    } else {
        return (
            <p>Icon type was not specified.</p>
        )
    }
}

ReactDOM.render(<CommonRules/>, document.getElementById('common'));
ReactDOM.render(<ChatRules/>, document.getElementById('behavior'));
ReactDOM.render(<AdditionalRules/>, document.getElementById('addon'));