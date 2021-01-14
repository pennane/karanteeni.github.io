'use-strict';

{/* Joo tuota... Note to self: Komennot pois propeista ja parannetaa koodin luettavuutta. */ }

class Tooltip extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.text
        };
    }

    render() {
        return (
            <span data-toggle="tooltip" data-placement="top" title={this.props.text}>{this.props.children}</span>
        )
    }
}

class RankTables extends React.Component {
    render() {
        return (
            <div>
                <ElotonRaihnas />
                <SisukasParantuva />
                <ImmuuniParantaja />
                <NekroKuolematon />
            </div>
        )
    }
}

class Structure extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            time: this.props.time,
            color: this.props.color, /* c-rankinnimi */
            bgColor: this.props.bgColor || ''
        }
    }

    render() {
        return (
            <div className='col-sm'>
                <div className="rank card">
                    <div className='rank-card-body'>
                        <h5 className={this.state.color + 'card-title'}><span className={this.state.bgColor + ' rank-name-text'}>{this.props.name}</span> <span className='time'>({this.props.time})</span></h5>
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

class Body extends React.Component {
    render() {
        return (
            <table className='table table-striped table-dark'>
                <tbody>
                    {this.props.children}
                </tbody>
            </table>
        )
    }
}

class CommandRow extends React.Component {
    render() {
        return (
            <tr>
                {this.props.children}
            </tr>
        )
    }
}

class DisabledCommand extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title,
            command: this.props.command,
            disabled: this.props.disabled
        }
    }

    render() {
        const sorry = "Anteeksi, tämä komento ei toistaiseksi ole käytössä"
        const info = this.props.info

        if (info) {
            return (
                <td>
                    <span data-toggle='tooltip' data-placement='top' title={sorry} className="disabled">{this.props.command} <i className="fas fa-info-circle"></i></span>
                </td>
            )
        }
        return (
            <td >
                <span data-toggle='tooltip' data-placement='top' title={sorry} className="disabled">{this.props.command}</span>
            </td>
        )
    }
}

class Command extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title,
            command: this.props.command,
            disabled: this.props.disabled
        }
    }

    render() {

        if (this.props.disabled) {
            return <DisabledCommand {...this.props} />
        }

        const info = this.props.info

        if (info) {
            return (
                <td>
                    {this.props.command} <span data-toggle='tooltip' data-placement='right' title={this.props.title}><i className="fas fa-info-circle"></i></span>
                </td>
            )
        }
        return (
            <td>
                {this.props.command}
            </td>
        )
    }
}

class SetHome extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: this.props.count
        }
    }
    render() {
        return (
            <Command info title={this.props.count + ' kpl'} command='/sethome' />
        )
    }
}

class Others extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.text,
            tip: this.props.tip
        }
    }

    render() {
        return (
            <p className="card-text">
                {this.props.text } &nbsp;
                {this.props.tip &&
                    <span data-toggle='tooltip' data-placement='right' title={this.props.tip}>
                        <i className="fas fa-info-circle"></i>
                    </span>
                }
            </p>
        )
    }
}

class ElotonRaihnas extends React.Component {
    render() {
        return (
            <div className='row'>
                <Structure name='Eloton' time='0h' color='c-eloton '>
                    <Body>
                        <CommandRow>
                            <SetHome count='1' />
                            <Command info={false} />
                        </CommandRow>
                    </Body>
                    <div class="rank-others">
                        <h5>Muuta:</h5>
                        <p >Kaikilla pelaajilla olevat komennot ja toiminnot löytyvät <a id="link" href="ominaisuudet">ominaisuudet</a> sivulta.</p>  
                    </div>
                </Structure>
                <Structure name='Raihnas' time='5h' color='c-raihnas '>
                    <Body>
                        <CommandRow>
                            <SetHome count='2' />
                            <Command info={false} command='/workbench' />
                        </CommandRow>
                        <CommandRow>
                            <Command info={false} command='/hat' />
                            <Command info={false} command='/calculate' />
                        </CommandRow>
                    </Body>
                </Structure>
            </div>
        )
    }
}

class SisukasParantuva extends React.Component {
    render() {
        return (
            <div className='row'>
                <Structure name='Sisukas' time='1d' color='c-sisukas '>
                    <Body>
                        <CommandRow>
                            <SetHome count='6' />
                            <Command info={false} command='/near' />
                        </CommandRow>
                        <CommandRow>
                            <Command info title='Taikamatto, 5x5 kokoinen lasimatto allasi, jolla voit leijua ilmassa, sekä lentää.' command='/mc' />
                            <Command info title='Suunnittele oma taikamattosi!' command='/mc design' />
                        </CommandRow>
                        <CommandRow>
                            <Command info={false} command='/enderchest' />
                            <Command info={false} />
                        </CommandRow>
                    </Body>
                    <div class="rank-others">
                        <h5>Muuta:</h5>
                        <p class="card-text">Kyky käyttää ja craftata <a href="/recipes#builderswand">Builders Wand</a>.</p>
                        <Others text='Kaksi uutta väriä taikamattoon (mc)' tip='Vaalean harmaa (oletus) ja läpinäkyvä' />
                    </div>

                </Structure>
                <Structure name='Parantuva' time='5d' color='c-parantuva ' >
                    <Body>
                        <CommandRow>
                            <SetHome count='8' />
                            <Command info={false} command='/feed' />

                        </CommandRow>
                        <CommandRow>
                            <Command info title='Nimen täytyy olla samankaltainen Minecraft nimesi kanssa tunnistautumisen vuoksi.' command='/nick' />
                            <Command info title='Voit teleportata koordinaatteihin.' command='/tp <x> <y> <z>' />
                        </CommandRow>
                    </Body>
                    <div class="rank-others">
                        <h5>Muuta:</h5>
                        <Others text='Neljä uutta väriä taikamattoon (mc)' tip='Valkoinen, harmaa, vaalean harmaa ja sininen' />
                        <Others text='Kyky hakata spawnereita ilman Silk Touchia' tip='Tarvitset silti hakun kerätäksesi sen!' />
                    </div>

                </Structure>
            </div>
        )
    }
}

class ImmuuniParantaja extends React.Component {
    render() {
        return (
            <div class='row'>
                <Structure name='Immuuni' time='10d' color='c-immuuni ' >
                    <Body>
                        <CommandRow>
                            <SetHome count='12' />
                            <Command info title='Estää pelaajien teleporttipyynnöt ja teleporttaukset' command='/tptoggle' />
                        </CommandRow>
                        <CommandRow>
                            <Command info={false} command='/fly' />
                            <Command info title='Nimeää kädessäsi olevan esineen!' command='/nimeä' />
                        </CommandRow>
                        <CommandRow>
                            <Command info title='Vaihtaa spawnerin tyyppiä. Ota spawner käteen kun suoritat komentoa.' command='/spawner' />
                            <Command info={false} command='/tp <pelaaja>' />
                        </CommandRow>
                    </Body>
                    <div class="rank-others">
                        <h5>Muuta:</h5>
                        <Others text='Kaksi uutta väriä taikamattoon (mc)' tip='Keltainen ja ruskea' />
                    </div>

                </Structure>
                <Structure name='Parantaja' time='30d' color='c-parantaja ' >
                    <Body>
                        <CommandRow>
                            <SetHome count='16' />
                            <Command info={false} />
                        </CommandRow>
                    </Body>
                    <div class="rank-others">
                        <h5>Muuta:</h5>
                        <Others text='Uusia tapoja nimetä tavaroita /nimeä komennolla' tip="Lihavointi, kursivointi, randomisointi ja alleviivaus" />
                        <Others text='Kaksi uutta väriä taikamattoon (mc)' tip='Lime ja musta' />
                    </div>

                </Structure>
            </div>
        )
    }
}

class NekroKuolematon extends React.Component {
    render() {
        return (
            <div class='row'>
                <Structure name='Nekromantikko' time='60d' color='c-nekromantikko '>
                    <Body>
                        <CommandRow>
                            <SetHome count='18' />
                            <Command info title='Kyky tarkastella blockeja' command='/co i' />
                        </CommandRow>
                    </Body>
                    <div class="rank-others">
                        <h5>Muuta:</h5>
                        <Others text='Kyky asettaa täys RGB värillinen nick.' tip='Syntaksilla &amp;#rrggbb' />
                        <Others text='Nekromatikkoja ei voi hiljentää /ignore komennolla.' />
                        <Others text='Kaksi uutta väriä taikamattoon (mc)' tip='Magenta ja punainen' />
                        <Others text='Lisäpalikoita taikamattoon (mc)' tip='jääblock' />
                    </div>

                </Structure>
                <Structure name='Kuolematon' time='100d' color='c-kuolematon ' >
                    <Body>
                        <CommandRow>
                            <SetHome count='18' />
                            <Command info={false} />
                        </CommandRow>
                    </Body>
                    <div class="rank-others">
                        <h5>Muuta:</h5>
                        <Others text='Kuusi uutta väriä taikamattoon (mc)' tip='Pinkki, syaani, purppura, oranssi, vihreä ja vaalean sininen' />
                        <Others text='Lisäpalikka taikamattoon' tip='Barrier block' />
                    </div>

                </Structure>
            </div>
        )
    }
}

ReactDOM.render(<RankTables />, document.getElementById('rankit'))
