'use-strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Articles = function (_React$Component) {
    _inherits(Articles, _React$Component);

    function Articles() {
        _classCallCheck(this, Articles);

        return _possibleConstructorReturn(this, (Articles.__proto__ || Object.getPrototypeOf(Articles)).apply(this, arguments));
    }

    _createClass(Articles, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                React.Fragment,
                null,
                React.createElement(
                    ArticleBody,
                    null,
                    React.createElement(
                        Title,
                        { label: true, type: 'announcement' },
                        '1.16.3'
                    ),
                    React.createElement(
                        Time,
                        null,
                        '11.09.2020'
                    ),
                    React.createElement(
                        Content,
                        null,
                        React.createElement(
                            'p',
                            null,
                            'Palvelin on p\xE4ivitetty nyt 1.16.3 versioon. T\xE4m\xE4n lis\xE4ksi nykyinen roadmappimme ei pid\xE4 paikkaansa ja se t\xE4ytynee p\xE4ivitt\xE4\xE4 uudelleen jossain kohti. Toistaiseksi halloween-tapahtuma on siis peruttu ajanpuutteen vuoksi ja keskitymme t\xE4ysill\xE4 joulujuhlaan. P\xE4ivitetyn roadmapin saanette my\xF6hemmin.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Ilmoittanemme my\xF6s, ett\xE4 Eye of Enderit toistaiseksi johdattavat t\xE4ysin satunnaisiin paikkoihin, eli ovat rikki. Todenn\xE4k\xF6inen syy t\xE4lle on 1.15 kartta, sill\xE4 emme generoineet uutta karttaa t\xE4ss\xE4 p\xE4ivityksess\xE4.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Mukavaa syksyn odotusta.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Yst\xE4v\xE4llisin terveisin,',
                            React.createElement('br', null),
                            'Karanteenin yll\xE4pito'
                        )
                    )
                ),
                React.createElement(
                    ArticleBody,
                    null,
                    React.createElement(
                        Title,
                        { label: true, type: 'update' },
                        'Welcome to the Nether!'
                    ),
                    React.createElement(
                        Time,
                        null,
                        '20.08.2020, muokattu 11.09.2020'
                    ),
                    React.createElement(
                        Content,
                        null,
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'a',
                                { id: 'link', href: 'https://www.minecraft.net/fi-fi/article/nether-update-java', target: '_blank', rel: 'noopener noreferrer' },
                                'The Nether Update'
                            ),
                            ' on saapunut my\xF6s Karanteeniin! TL;DR l\xF6ytynee postauksen lopusta.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Nether Update on Karanteenin suurin pelikokemusta muuttava p\xE4ivitys. 1.16.2 version py\xF6riess\xE4 palvelimella, mietimme samalla palvelintamme. Kysyimme teilt\xE4 3. kes\xE4kuuta 2020, mill\xE4 tavoin voimme parantaa teid\xE4n pelikokemustanne ja olemme jo saaneet suunnitelmaa t\xE4h\xE4n. Nether Update teki joitain asioita helpoksi meid\xE4n kantiltamme. L\xF6imme lukkoon 29. kes\xE4kuuta, ett\xE4 nollaamme Netherin t\xE4stedes viimeisen kerran hetkeen. Samalla End nollautuu vain kerran kartan aikana, suunnilleen puolessa v\xE4liss\xE4 puolen vuoden aikataulua.'
                        ),
                        React.createElement('br', null),
                        React.createElement(
                            'p',
                            null,
                            'Kuten varmasti huomaatte, nettisivuja on mukautettu ',
                            React.createElement(
                                'strong',
                                null,
                                'huomattavasti'
                            ),
                            '. Nettisivujen tiettyj\xE4 elementtej\xE4 on "modernisoitu" ja tehty selke\xE4mm\xE4ksi. Samalla nettisivut saivat hornan tulisen ulkoasun juhlistaaksemme Nether Updatea. Yll\xE4pitokortit saivat uuden ulkoasun, jossa nyt lyhyesti selitetty my\xF6s yll\xE4pit\xE4jien vahvuudet. Navigaatiopalkki sai itselleen napit ja alasvetovalikkoihin animaatiot. Footeria laajennettiin ja sis\xE4lt\xE4\xE4 varmasti kauan kaivatut sosiaalisen median linkit. Sen lis\xE4ksi sielt\xE4 p\xE4\xE4see helposti navigoimaan seuraavaan paikkaan, mik\xE4li kokee tarpeelliseksi. Ty\xF6t\xE4 nettisivujen kanssa on kuitenkin viel\xE4 paljon, sill\xE4 selke\xE4 ulkoasu ja k\xE4ytt\xF6kokemus ovat hyvi\xE4 ominaisuuksia.'
                        ),
                        React.createElement('br', null),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'strong',
                                null,
                                'Miksi t\xE4ss\xE4 p\xE4ivityksess\xE4 kesti n\xE4in kauan?'
                            ),
                            ' Ajan puute, 1.16.2 version odottaminen, plugineiden p\xE4ivitt\xE4minen, odottamattomat ongelmat... Man, life is unpredictable at times.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'strong',
                                null,
                                'TL;DR:'
                            ),
                            React.createElement('br', null),
                            React.createElement(
                                'ul',
                                null,
                                React.createElement(
                                    'li',
                                    null,
                                    'Palvelimella py\xF6rii Paper 1.16.2'
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    'End ja Nether nollattu, End nollataan jatkossa vain kerran per kartta'
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    'Nettisivua "modernisoitu", mutta sit\xE4 jatketaan + Nether teema'
                                )
                            )
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Terveisi\xE4 Crimson Forestista, Netherist\xE4. ',
                            React.createElement('br', null),
                            'Karanteenin yll\xE4pito'
                        )
                    )
                ),
                React.createElement(
                    ArticleBody,
                    null,
                    React.createElement(
                        Title,
                        { label: true, type: 'announcement' },
                        'Kes\xE4n mapreset'
                    ),
                    React.createElement(
                        Time,
                        null,
                        '22.04.2019'
                    ),
                    React.createElement(
                        Content,
                        null,
                        React.createElement(
                            'p',
                            null,
                            'Iltaa!'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Maailmanloppu ja mapin resetointi meni yll\xE4tt\xE4v\xE4n sulavasti. Resetoinnnin yhteydess\xE4 korjattiin tiettyj\xE4 bugeja, kuten mobien tracking range, lumousp\xF6yd\xE4n v\xE4\xE4r\xE4t ehdotukset ja Nether-portaalien + mobien yhteisty\xF6. Sen lis\xE4ksi kyliin liittyv\xE4 mainostuss\xE4\xE4nt\xF6 on nyt muutettu hieman vapaammaksi, jonka t\xE4smennyksen voi lukea ',
                            React.createElement(
                                'a',
                                { id: 'link', href: '/saannot' },
                                's\xE4\xE4nn\xF6ist\xE4'
                            ),
                            ', sek\xE4 Discordin ilmoituskanavalta.'
                        ),
                        React.createElement('br', null),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'strong',
                                null,
                                'S\xE4\xE4nt\xF6muutos in a nutshell:'
                            ),
                            React.createElement('br', null),
                            React.createElement('br', null),
                            React.createElement(
                                'ol',
                                null,
                                React.createElement(
                                    'li',
                                    null,
                                    'Kyli\xE4 saa mainostaa yleisesti chatiss\xE4.'
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    'MSG-mainostus on kielletty\xE4'
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    'Copy & Paste mainosviestit ovat kiellettyj\xE4'
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    'Voit mainostaa kyl\xE4\xE4si spawnilla'
                                )
                            )
                        ),
                        React.createElement('br', null),
                        React.createElement(
                            'p',
                            null,
                            'Toivottavasti nautitte uudistuksista ja paransimme j\xE4lleen pelikokemusta. Olette yhteis\xF6n\xE4 meille t\xE4rke\xE4! Hyv\xE4\xE4 kes\xE4\xE4 kaikille! \u2665'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Yst\xE4v\xE4llisin terveisin, ',
                            React.createElement('br', null),
                            'Karanteenin yll\xE4pito'
                        )
                    )
                ),
                React.createElement(
                    ArticleBody,
                    null,
                    React.createElement(
                        Title,
                        { label: true, type: 'announcement' },
                        'Karanteeni ja uusi palvelin'
                    ),
                    React.createElement(
                        Time,
                        null,
                        '22.04.2019'
                    ),
                    React.createElement(
                        Content,
                        null,
                        React.createElement(
                            'p',
                            null,
                            'Hyv\xE4\xE4 iltaa!'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Karanteenin datan siirto uudelle palvelimelle on onnistuneesti suoritettu. Palvelimen suorituskyky k\xE4yt\xE4nn\xF6ss\xE4 kymmenkertaistui ja k\xE4ytt\xF6\xF6n otettiin my\xF6s uusi palvelinohjelmisto. Kiit\xE4mme teit\xE4 pitk\xE4aikaisesta k\xE4rsiv\xE4llisyydest\xE4, toivottavasti pelikokemuksenne on nyt parantunut. :3'
                        ),
                        React.createElement('br', null),
                        React.createElement(
                            'p',
                            null,
                            'Yst\xE4v\xE4llisin terveisin, ',
                            React.createElement('br', null),
                            'Karanteenin yll\xE4pito'
                        )
                    )
                ),
                React.createElement(
                    ArticleBody,
                    null,
                    React.createElement(
                        Title,
                        { label: true, type: 'update' },
                        '1.15.2 Map reset'
                    ),
                    React.createElement(
                        Time,
                        null,
                        '22.04.2019'
                    ),
                    React.createElement(
                        Content,
                        null,
                        React.createElement(
                            'p',
                            null,
                            'Palvelimella on juuri (16.2.2020) resetattu kartta, jossa versiona toimii 1.15.2. Toisin sanoen viime mapin rahat, rakennelmat ja muut ovat nyt historiaa, ja t\xE4m\xE4 tarkoittaa sit\xE4, ett\xE4 viimein voi taas aloittaa rakentelut niin sanotusti n\xE4tisti puhtaalta p\xF6yd\xE4lt\xE4.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            React.createElement(
                                'strong',
                                null,
                                'P.S '
                            ),
                            'Yll\xE4pitohaku py\xF6rii edelleen. Innokkaita ja haun vaatimuksia t\xE4ytt\xE4vi\xE4 halukkaita kaivataan yll\xE4pitojoukkoon. Lis\xE4tietoa yll\xE4pitoon hakemisesta l\xF6ytyy',
                            React.createElement(
                                'a',
                                { href: 'yphaku', id: 'link' },
                                't\xE4\xE4lt\xE4'
                            ),
                            '.'
                        ),
                        React.createElement('br', null),
                        React.createElement(
                            'p',
                            null,
                            'Yst\xE4v\xE4llisin terveisin, ',
                            React.createElement('br', null),
                            'Karanteenin yll\xE4pito'
                        )
                    )
                ),
                React.createElement(
                    ArticleBody,
                    null,
                    React.createElement(
                        Title,
                        { label: true, type: 'announcement' },
                        'Joulun ja korjausten n\xE4kym\xE4t'
                    ),
                    React.createElement(
                        Time,
                        null,
                        '22.04.2019'
                    ),
                    React.createElement(
                        Content,
                        null,
                        React.createElement(
                            'p',
                            null,
                            'Pyrimme parhaamme mukaan sel\xE4tt\xE4m\xE4\xE4n jo aikansa palvelinta kiusanneet 1.14 version mukana saapuneet ongelmat, ja kiit\xE4mme teit\xE4 k\xE4rsiv\xE4llisyydest\xE4. Puhutaan nyt kuitenkin jostain mukavammasta, nimitt\xE4in joulusta.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Karanteenin joulukuu tulee olemaan varsin kiireellist\xE4 aikaa koko Karanteenin v\xE4elle elottomasta yll\xE4pitoon. Joulukuulta voi odottaa p\xE4ivityksi\xE4 palvelimen toimintaan liittyen (komentojen, pluginien korjauksia yms.), mutta ehk\xE4 mielenkiintoisempaa on huomauttaa, ett\xE4 parannusten ohella on saapumassa monia jouluisia tapahtumia.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Joulukuussa Karanteeniin aukeaa joulukalenteri, mink\xE4 ansiosta joulu tulee olemaan varsin tapahtumakeskeinen. Suosittelemme pit\xE4m\xE4\xE4n silm\xE4ll\xE4 t\xE4t\xE4 sivua sek\xE4 Discordin ilmoitukset ja tapahtumat -kanavia, sill\xE4 luvassa on varsin hauskoja ja mielenkiintoisia yll\xE4tyksi\xE4.'
                        ),
                        React.createElement(
                            'p',
                            null,
                            'Huomioitavaa my\xF6s on, ett\xE4 t\xE4\xE4ll\xE4 netiss\xE4 pyrit\xE4\xE4n korjaamaan vanhentuneet tiedot voimassaoleviksi. Pitk\xE4lti kaikki paikkaansa pit\xE4m\xE4t\xF6n tieto on jo karsittu pois, mutta mik\xE4li silm\xE4\xE4n kuitenkin viel\xE4 kantautuu v\xE4\xE4r\xE4\xE4 tai vanhentunutta tietoa, pyyd\xE4mme ilmoittamaan siit\xE4 yll\xE4pidolle.'
                        ),
                        React.createElement('br', null),
                        React.createElement(
                            'strong',
                            null,
                            'TLDR;'
                        ),
                        ' Joulukuussa Karanteenissa on kaksi p\xE4\xE4limm\xE4ist\xE4 agendaa: palvelimen pintaremontointi ja tapahtumakeskeinen joulun odotus.',
                        React.createElement('br', null),
                        React.createElement('br', null),
                        React.createElement(
                            'p',
                            null,
                            'Yst\xE4v\xE4llisin terveisin, ',
                            React.createElement('br', null),
                            'Karanteenin yll\xE4pito'
                        )
                    )
                ),
                React.createElement(
                    ArticleBody,
                    null,
                    React.createElement(
                        Title,
                        { label: true, type: 'update' },
                        'Villages & Pillages'
                    ),
                    React.createElement(
                        Time,
                        null,
                        '22.04.2019'
                    ),
                    React.createElement(
                        Content,
                        null,
                        React.createElement(
                            'p',
                            null,
                            'Kauan odotettu 1.14 p\xE4ivitys Karanteeniin on saapunut! ',
                            React.createElement('br', null),
                            React.createElement('br', null),
                            React.createElement(
                                'strong',
                                null,
                                'TLDR;'
                            ),
                            ' vaihdoimme palveluntarjoajaa ja otimme k\xE4ytt\xF6\xF6n BungeeCordin (Spigot 1.14.4). Palvelimella esiintyy bugeja, eik\xE4 kaikkia ominaisuuksia ole viel\xE4 lis\xE4tty, mutta saapuvat ajan kanssa. ',
                            React.createElement('br', null),
                            React.createElement('br', null),
                            React.createElement(
                                'strong',
                                null,
                                React.createElement(
                                    'span',
                                    { 'class': 'text-danger' },
                                    'HUOM!'
                                )
                            ),
                            ' Tied\xE4mme, ett\xE4 serverill\xE4 on lagia (johtuen 1.14.4), sit\xE4 ei tarvitse kertoa. ',
                            React.createElement('br', null),
                            React.createElement('br', null),
                            'P\xE4ivitys tuo tullessaan BungeeCordin, uuden IP-osoitteen, uutta palvelinrautaa (jotta serveri pysyisi pelaamiskelpoisena), uudet pluginit ja huomattavasti v\xE4hemm\xE4n bugeja. Karanteeni aloittaa toimintansa aluksi pelk\xE4st\xE4\xE4n Survival pelimuodolla PvP:n j\xE4\xE4dess\xE4 tauolle. Nuublesin ollessa kiireinen ei kaikkia ominaisuuksia ole my\xF6sk\xE4\xE4n ehditty toteuttaa, mutta saapuvat ajan kanssa. Creative ja Hub lis\xE4t\xE4\xE4n my\xF6hemmin, jotka BungeeCordin ansiosta toteutuvat omina palvelimina. P\xE4hkin\xE4nkuoressa t\xE4m\xE4 tarkoittaa sit\xE4, ett\xE4 voitte jatkaa rauhassa Survivalin pelaamista, jos Gauris kaataa Creativen sill\xE4 v\xE4lin. ',
                            React.createElement('br', null),
                            React.createElement('br', null),
                            'Suunnitelmissa on my\xF6s Skyblockin ja minipelien tuominen takaisin, kukin omina versioinaan kunhan aikaa ensin l\xF6ytyy. Survivalin p\xE4\xE4muutoksiin tulevaisuudessa kuuluu ekonomian muuttaminen ja tasapainottaminen, pelimuodon vaikeuttaminen itsess\xE4\xE4n, sek\xE4 mahdollisesti pelaajien omat suojaukset. J\xE4lkimm\xE4isest\xE4 ei ole mit\xE4\xE4n varmuutta. ',
                            React.createElement('br', null),
                            React.createElement('br', null),
                            'Nettisivut saivat my\xF6s hieman ehostusta ymp\xE4ri sivustoa. Vanha muutosloki on dumpattu ja tilalle luotu loki 1.14 versiota koskevia muutoksia varten. ',
                            React.createElement('br', null),
                            React.createElement('br', null),
                            React.createElement(
                                'strong',
                                null,
                                'Muistutuksen arvoisia asioita t\xE4h\xE4n loppuun:'
                            ),
                            ' Karanteeni hakee edelleen uutta ja aktiivista yll\xE4pitoa, nettisivu saattaa sis\xE4lt\xE4\xE4 vanhaa tietoa ja palvelimen IP-osoite on vaihtunut. ',
                            React.createElement('br', null),
                            React.createElement('br', null),
                            'Yst\xE4v\xE4llisin terveisin, ',
                            React.createElement('br', null),
                            'Karanteenin yll\xE4pito'
                        )
                    )
                ),
                React.createElement(
                    ArticleBody,
                    null,
                    React.createElement(
                        Title,
                        { label: true, type: 'announcement' },
                        'Nettisivujen uusi ulkoasu'
                    ),
                    React.createElement(
                        Time,
                        null,
                        '22.04.2019'
                    ),
                    React.createElement(
                        Content,
                        null,
                        React.createElement(
                            'p',
                            null,
                            'Tervehdys. ',
                            React.createElement('br', null),
                            'Olemme tapelleet syyskuusta l\xE4htien sivujen v\xE4rimaailman kanssa. Joidenkin mielest\xE4 joku oli liian kirkas, joku liian tumma, eik\xE4 koskaan sopivaa. Kun laitoimme tumman teeman suurimman osan toiveesta ettei silm\xE4t hajoa, tajusimme, ett\xE4 sivut n\xE4yttiv\xE4t itseasiassa tylsilt\xE4. P\xE4\xE4simme kuitenkin hyvin l\xE4helle v\xE4rimaailmaa, jossa suurin osa sopii hyvin yhteen, eik\xE4 n\xE4yt\xE4 liian tyls\xE4lt\xE4 tai kankealta, vaikka geneeriselt\xE4 saattaa n\xE4ytt\xE4\xE4kin. ',
                            React.createElement('br', null),
                            React.createElement('br', null),
                            'Mik\xE4 sitten muuttui?',
                            React.createElement(
                                'ul',
                                null,
                                React.createElement(
                                    'li',
                                    null,
                                    'Yll\xE4pitojutut vaihtanut paikkaa, sek\xE4 niiden m\xE4\xE4r\xE4\xE4 lis\xE4tty'
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    'Fonttikoko pienentynyt'
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    'Minecraft -tyylinen fontti ja ulkoasu'
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    'Vanha tuttu palvelimen statuskysely palautettu'
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    'Lis\xE4tty UKK -osio'
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    'Rankit saivat uuden ulkoasun (kiitos Susselle ideasta!)'
                                )
                            ),
                            'Toivomme, ett\xE4 t\xE4m\xE4 miellytt\xE4\xE4 silm\xE4\xE4nne hieman enemm\xE4n. :)'
                        )
                    )
                ),
                React.createElement(
                    ArticleBody,
                    null,
                    React.createElement(
                        Title,
                        { label: true, type: 'announcement' },
                        'Yll\xE4pitohaku'
                    ),
                    React.createElement(
                        Time,
                        null,
                        '12.03.2019'
                    ),
                    React.createElement(
                        Content,
                        null,
                        React.createElement(
                            'p',
                            null,
                            'Hei. ',
                            React.createElement('br', null),
                            'Karanteenin yll\xE4pitoarvoj\xE4rjestys on muuttunut, jonka seurauksena olemme avanneet avoimet hakemukset kaikille. Karanteenissa on pitk\xE4n aikaa ollut tasan kaksi',
                            React.createElement(
                                'span',
                                { 'data-toggle': 'tooltip', 'data-placement': 'top',
                                    title: 'Omistajaa ei lasketa, sill\xE4 sinne ei ole mahdollista p\xE4\xE4st\xE4.' },
                                React.createElement(
                                    'b',
                                    null,
                                    'yll\xE4pitoarvoa'
                                )
                            ),
                            ', Rakentaja ja Admin. T\xE4h\xE4n on kuitenkin tehty muutoksia, joka mahdollistaa nyt avoimet hakemukset yll\xE4pitoon. Uusia yll\xE4pitoarvoja on kaksi, kokonaism\xE4\xE4r\xE4n ollessa nelj\xE4. ',
                            React.createElement('br', null),
                            'Hakemuksien ollessa edelleen vapaamuotoisia, kriteerit ovat kuitenkin muuttuneet. Lis\xE4tietoa l\xF6yd\xE4t',
                            React.createElement(
                                'a',
                                { href: 'yphaku', id: 'link' },
                                't\xE4\xE4lt\xE4'
                            ),
                            '. ',
                            React.createElement('br', null),
                            React.createElement('br', null),
                            'Toivomme, ett\xE4 ratkaisu olisi kaikille hy\xF6dyksi, etenkin yhteis\xF6lle itselleen. Onnea jokaiselle, joka hakemuksen l\xE4hett\xE4\xE4. :)'
                        )
                    )
                )
            );
        }
    }]);

    return Articles;
}(React.Component);

var ArticleBody = function ArticleBody(props) {
    return React.createElement(
        'div',
        { className: 'px-1 container pt-3 pb-3' },
        React.createElement(
            'div',
            { className: 'karaupdate card bg-transparent card-body text-white content' },
            props.children
        )
    );
};

var Title = function Title(props) {

    if (props.label) {
        if (props.type == "update") {
            return React.createElement(
                'h2',
                { id: 'title', className: 'title' },
                props.children,
                '\xA0',
                React.createElement(Label, { text: 'P\xE4ivitys', css: 'success' })
            );
        } else if (props.type == "important") {
            return React.createElement(
                'h2',
                { id: 'title', className: 'title' },
                props.children,
                '\xA0',
                React.createElement(Label, { text: 'T\xE4rke\xE4', css: 'danger' })
            );
        } else if (props.type == "announcement") {
            return React.createElement(
                'h2',
                { id: 'title', className: 'title' },
                props.children,
                '\xA0',
                React.createElement(Label, { text: 'Ilmoitus', css: 'primary' })
            );
        } else if (props.type == "event") {
            return React.createElement(
                'h2',
                { id: 'title', className: 'title' },
                props.children,
                '\xA0',
                React.createElement(Label, { text: 'Tapahtuma', css: 'secondary' })
            );
        } else if (props.type == "tech") {
            return React.createElement(
                'h2',
                { id: 'title', className: 'title' },
                props.children,
                '\xA0',
                React.createElement(Label, { text: 'Tekninen', css: 'warn' })
            );
        }
    } else {
        return React.createElement(
            'h2',
            { id: 'title', className: 'title' },
            props.children
        );
    }
};

var Time = function Time(props) {
    return React.createElement(
        'small',
        null,
        props.children
    );
};

var Content = function Content(props) {
    return React.createElement(
        'div',
        { className: 'mt-3', id: 'content' },
        props.children
    );
};

var Image = function Image(props) {
    if (props.link) {
        return React.createElement(
            'a',
            { href: props.link, target: '_blank' },
            React.createElement('img', { 'data-toggle': 'tooltip', 'data-placement': 'top',
                title: 'Klikkaamalla kuvaa voit n\xE4hd\xE4 sen t\xE4ysikokoisena.', className: 'img-fluid', src: props.source })
        );
    } else {
        return React.createElement('img', { src: props.source });
    }
};

var Label = function Label(_ref) {
    var text = _ref.text,
        css = _ref.css;

    return React.createElement(
        'span',
        { className: 'badge badge-pill badge-' + css },
        text
    );
};

ReactDOM.render(React.createElement(Articles, null), document.getElementById('articles'));