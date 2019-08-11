'use-strict';

class RecipeList extends React.Component {
    render() {
        return (
            <div className="col-lg-12 text-center">
                <div className="card card-body bg-transparent" style={{marginBottom: 1.2 + 'em', fontFamily: + 'Source Sans Pro' + '!important'}}>
                    <h1 className="mt-5">Custom Reseptit</h1>
                    <p className="lead">Karanteenilla on omia reseptejä, wohoo.</p>
                    <Recipes recipe={this.props.recipe} />
                </div>
            </div>
        )
    }
}

function Recipes(props) {
    return (
        <div className="col-lg-6 m-auto text-center">
            <Chainmail recipe={props.recipe} />
            <Coral recipe={props.recipe} />
            <Plank recipe={props.recipe} />
            <PHead recipe={props.recipe} />
            <ZHead recipe={props.recipe} />
            <br/>
            <SkelHead recipe={props.recipe} />
            <br/>
            <SmeltGravel recipe={props.recipe} />
            <br/>
            <SmeltSand recipe={props.recipe} />
            <br/>
            <XpBot recipe={props.recipe}/>
            <br/>
            <Dirt recipe={props.recipe}/>
        </div>
    )
}

function Chainmail(props) {
    return (
        <figure className="figure mb-5">
            <CmailImg img={props.img} />
            <CmailCap cap={props.img} />
        </figure>
    )
}

function CmailImg(props) {
    return (
        <img src="assets/images/recipes/chainmail_armor.png" alt="" className="img-fluid recipe" />
    )
}

function CmailCap(props) {
    return (
        <figcaption className="figure-caption">
            Chainmail Armorit rakennetaan iron bareista samalla tavalla kuin normaalit armorit. Tarvittava raaka-aine on iron bar.
        </figcaption>
    )
}

function Coral(props) {
    return (
        <figure className="figure mb-5">
            <CoralImg img={props.img} />
            <CoralCap cap={props.cap} />
        </figure>
    )
}

function CoralImg(props) {
    return (
        <img src="assets/images/recipes/fire_coral.png" alt="" className="img-fluid recipe" />
    )
}

function CoralCap(props) {
    return (
        <figcaption className="figure-caption">
            Coral faneja voi muuttaa Coraleiksi.
        </figcaption>
    )
}

function Plank(props) {
    return (
        <figure className="figure mb-5">
            <PlankImg img={props.img} />
            <PlankCap cap={props.cap} />
        </figure>
    )
}

function PlankImg(props) {
    return (
        <img src="assets/images/recipes/plank.png" alt="" className="img-fluid recipe" />
    )
}

function PlankCap(props) {
    return (
        <figcaption className="figure-caption">
            Laittamalla kaksi slabia päällekkäin mistä tahansa puumateriaalista tekee siitä kokonaisen plankin.
        </figcaption>
    )
}

function PHead(props) {
    return (
        <figure className="figure mb-5">
            <PHeadImg img={props.img} />
            <PHeadCap cap={props.cap} />
        </figure>
    )
}

function PHeadImg(props) {
    return (
        <img src="assets/images/recipes/player_head.png" alt="" className="img-fluid recipe" />
    )
}

function PHeadCap(props) {
    return (
        <figcaption className="figure-caption">
            Voit tehdä pelaajan pään. :) Raaka-aineina Bone block, Emerald, Diamond, Golden Apple ja Rotten flesh.
        </figcaption>
    )
}

function ZHead(props) {
    return (
        <figure className="figure mb-5">
            <ZHeadImg img={props.img} />
            <ZHeadCap cap={props.cap} />
        </figure>
    )
}

function ZHeadImg(props) {
    return (
        <img src="assets/images/recipes/zombie_head.png" alt="" className="img-fluid recipe" />
    )
}

function ZHeadCap(props) {
    return (
        <figcaption className="figure-caption">
            Ja Zombien pään. Raaka-aineina Golden Apple, Bone block ja Rotten flesh. :o
        </figcaption>
    )
}

function SkelHead(props) {
    return (
        <figure className="figure mb-5">
            <SkelHeadImg img={props.img} />
            <SkelHeadCap cap={props.cap} />
        </figure>
    )
}

function SkelHeadImg(props) {
    return (
        <img src="assets/images/recipes/skeleton_head.png" alt="" className="img-fluid recipe" />
    )
}

function SkelHeadCap(props) {
    return (
        <figcaption className="figure-caption">
            Voit tehdä myös Skeletonin pään. Raaka-aineina Golden Apple, Bone ja Bone block.
        </figcaption>
    )
}

function SmeltGravel(props) {
    return (
        <figure className="figure mb-5">
            <SmeltGImg img={props.img} />
            <SmeltGCap cap={props.cap} />
        </figure>
    )
}

function SmeltGImg(props) {
    return (
        <img src="assets/images/recipes/smelt_gravel.png" alt="" className="img-fluid recipe" />
    )
}

function SmeltGCap(props) {
    return (
        <figcaption className="figure-caption">
            Voit sulattaa stonea graveliksi.
        </figcaption>
    )
}

function SmeltSand(props) {
    return (
        <figure className="figure mb-5">
            <SmeltSImg img={props.img} />
            <SmeltSCap cap={props.cap} />
        </figure>
    )
}

function SmeltSImg(props) {
    return (
        <img src="assets/images/recipes/smelt_sand.png" alt="" className="img-fluid recipe" />
    )
}

function SmeltSCap(props) {
    return (
        <figcaption className="figure-caption">
            Ja gravelia hiekaksi, mahdollistaen lasin tekemisen stonesta. :)
        </figcaption>
    )
}

function XpBot(props) {
    return (
        <figure className="figure mb-5">
            <XpBotImg img={props.img} />
            <XpBotCap cap={props.cap} />
        </figure>
    )
}

function XpBotImg(props) {
    return (
        <img src="assets/images/recipes/xp_bottle.png" alt="" className="img-fluid recipe" />
    )
}

function XpBotCap(props) {
    return (
        <figcaption className="figure-caption">
            Enchanted Bottle on myös mahdollista koota. ;)
        </figcaption>
    )
}

function Dirt(props) {
    return (
        <figure className="figure mb-5">
            <DirtImg img={props.img} />
            <DirtCap cap={props.cap} />
        </figure>
    )
}

function DirtImg(props) {
    return (
        <img src="assets/images/recipes/dirt.png" alt="" className="img-fluid recipe" />
    )
}

function DirtCap(props) {
    return (
        <figcaption className="figure-caption">
            Meemi.
        </figcaption>
    )
}

ReactDOM.render(<RecipeList />, document.getElementById('recipes'));