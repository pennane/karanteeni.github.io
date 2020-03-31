'use-strict';

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
            bgColor: this.props.bgColor
        }
    }

    render() {
        return (
            <div className='col-sm mb-4'>
                <div className="rank card">
                    <div className='card-body'>
                        <h5 className={this.state.color + 'card-title'}><span className={this.state.bgColor + 'rank-name-text'}>{this.props.name}</span> <span className='time'>({this.props.time})</span></h5>
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
            tip: this.props.mcolors
        }
    }

    render() {
        return (
            <p className="card-text">
                {this.props.text} <span data-toggle='tooltip' data-placement='right' title={this.props.tip}><i className="fas fa-info-circle"></i></span>
            </p>
        )
    }
}

class ElotonRaihnas extends React.Component {
    render() {
        return (
            <div className='row'>
                <Structure name='Kova leipä' time='0h' color='c-eloton ' bgColor='g-eloton '>
                    <Body>
                        <CommandRow>
                            <SetHome count='1' />
                            <Command info={false} command='/kit aloitus' disabled />
                        </CommandRow>
                    </Body>
                </Structure>
                <Structure name='Näkkileipä' time='5h' color='c-raihnas ' bgColor='g-raihnas '>
                    <Body>
                        <CommandRow>
                            <SetHome count='2' />
                            <Command info={false} command='/kit eloton' disabled />
                        </CommandRow>
                        <CommandRow>
                            <Command info={false} command='/hat' />
                            <Command info={false} command='/workbench' />
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
                <Structure name='Paahtoleipä' time='1d' color='c-sisukas ' bgColor='g-sisukas '>
                    <Body>
                        <CommandRow>
                            <SetHome count='6' />
                            <Command info={false} command='/kit paahtoleipä' disabled />
                        </CommandRow>
                        <CommandRow>
                            <Command info title='Taikamatto, 5x5 kokoinen lasimatto allasi, jolla voit leijua ilmassa, sekä lentää.' command='/mc' />
                            <Command info={false} command='/mc design' />
                        </CommandRow>
                        <CommandRow>
                            <Command info={false} command='/enderchest' />
                            <Command info={false} command='/near' />
                        </CommandRow>
                        <CommandRow>
                            <Command info title='Äänestys + / - rankaisuista' command='/+ &amp; /-' disabled />
                            <Command info={false} command='/mc light' disabled />
                        </CommandRow>
                    </Body>
                    <h4>Muuta:</h4>
                    <Others text='Kaksi uutta väriä taikamattoon (mc)' tip='Vaalean harmaa (oletus) ja läpinäkyvä' />
                </Structure>
                <Structure name='Sämpylä' time='5d' color='c-parantuva ' bgColor='g-parantuva '>
                    <Body>
                        <CommandRow>
                            <SetHome count='8' />
                            <Command info={false} command='/kit sämpylä' disabled />
                        </CommandRow>
                        <CommandRow>
                            <Command info={false} command='/jump' disabled />
                            <Command info={false} command='/mc tools' disabled />
                        </CommandRow>
                        <CommandRow>
                            <Command info title='Nimen täytyy olla samankaltainen Minecraft nimesi kanssa tunnistautumisen vuoksi.' command='/nick' />
                            <Command info title='Voit aloittaa äänestyksen pelaajan hiljentämistä (20min) tai pelaajan potkimista varten.' command='/rankaise votemute & votekick' disabled />
                        </CommandRow>
                        <CommandRow>
                            <Command info title='Tarvitset pelaajan pään, jonka voit mm. craftata (kts. Custom Reseptit). Voit muuttaa pään kenen tahansa pääksi.' command='/skull' disabled />
                        </CommandRow>
                    </Body>
                    <h4>Muuta:</h4>
                    <Others text='Kolme uutta väriä taikamattoon (mc)' tip='Valkoinen, harmaa ja sininen' />
                    <Others text='Kyky hakata spawnereita ilman Silk Touchia' tip='Tarvitset silti hakun kerätäksesi sen!' />
                </Structure>
            </div>
        )
    }
}

class ImmuuniParantaja extends React.Component {
    render() {
        return (
            <div class='row'>
                <Structure name='Ruisleipä' time='10d' color='c-immuuni ' bgColor='g-immuuni '>
                    <Body>
                        <CommandRow>
                            <SetHome count='12' />
                            <Command info={false} command='/kit ruisleipä' disabled />
                        </CommandRow>
                        <CommandRow>
                            <Command info={false} command='/fly' />
                            <Command info title='Nimeää kädessäsi olevan esineen!' command='/nimeä' />
                        </CommandRow>
                        <CommandRow>
                            <Command info title='Aseta spawner maahan kun suoritat komentoa.' command='/spawner' />
                            <Command info={false} command='/tp' />
                        </CommandRow>
                        <CommandRow>
                            <Command info={false} command='/tptoggle' />
                            <Command info={false} />
                        </CommandRow>
                    </Body>
                    <h4>Muuta:</h4>
                    <Others text='Kaksi uutta väriä taikamattoon (mc)' tip='Keltainen ja ruskea' />
                </Structure>
                <Structure name='Öylätti' time='30d' color='c-parantaja ' bgColor='g-parantaja '>
                    <Body>
                        <CommandRow>
                            <SetHome count='16' />
                            <Command info={false} command='/kit öylätti' disabled />
                        </CommandRow>
                        <CommandRow>
                            <Command info={false} command='/jail' disabled />
                            <Command info={false} command='/kick' disabled />
                        </CommandRow>
                        <CommandRow>
                            <Command info={false} command='/mute' disabled />
                            <Command info={false} />
                        </CommandRow>
                    </Body>
                    <h4>Muuta:</h4>
                    <Others text='Kaksi uutta väriä taikamattoon (mc)' tip='Lime ja musta' />
                    {/* <Others text='Pääsy salaiseen arkistoon' tip='*SALAISTA TIETOA*'/> */}
                </Structure>
            </div>
        )
    }
}

class NekroKuolematon extends React.Component {
    render() {
        return (
            <div class='row'>
                <Structure name='Kroisantti' time='60d' color='c-nekromantikko ' bgColor='g-nekromantikko '>
                    <Body>
                        <CommandRow>
                            <SetHome count='18' />
                            <Command info={false} command='/kit kroisantti' disabled />
                        </CommandRow>
                        <CommandRow>
                            <Command info title='Kyky tarkastella blockeja' command='/co i' />
                            <Command info={false} />
                        </CommandRow>
                    </Body>
                    <h4>Muuta:</h4>
                    <Others text='Kaksi uutta väriä taikamattoon (mc)' tip='Magenta ja punainen' />
                </Structure>
                <Structure name='Mehukatti' time='100d' color='c-kuolematon ' bgColor='g-kuolematon '>
                    <Body>
                        <CommandRow>
                            <SetHome count='18' />
                            <Command info={false} command='/kit mehukatti' disabled />
                        </CommandRow>
                    </Body>
                    <h4>Muuta:</h4>
                    <Others text='Kuusi uutta väriä taikamattoon (mc)' tip='Pinkki, syaani, purppura, oranssi, vihreä ja vaalean sininen' />
                </Structure>
            </div>
        )
    }
}

ReactDOM.render(<RankTables />, document.getElementById('rankit'))
