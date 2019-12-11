'use-strict';

class RecipeList extends React.Component {
    render() {
        return (
            <div className="col-lg-12 text-center">
                <div className="card card-body bg-transparent" style={{ marginBottom: 1.2 + 'em', fontFamily: + 'Source Sans Pro' + '!important' }}>
                    <h1 className="mt-5">Custom Reseptit</h1>
                    <p className="lead">Karanteenilla on omia reseptejä, wohoo.</p>
                    <Recipes recipe={this.props.recipe} />
                </div>
            </div>
        )
    }
}

class RecipeCap extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <figcaption className="figure-caption">
                {this.props.caption}
            </figcaption>
        )
    }
}

class RecipeImg extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <img src={this.props.image} alt="" className="img-fluid recipe" />
        )
    }
}

class Recipe extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <figure className="figure mb-5">
                <RecipeImg image={this.props.image} />
                <RecipeCap caption={this.props.caption} />
            </figure>
        )
    }
}

const Recipes = (props) => {
    return (
        <div className="col-lg-6 m-auto text-center">
            <Recipe
                caption="Kaikki lasipaneelityypit voi muuttaa takaisin palikoiksi."
                image="assets/images/recipes/glasspane.png"
            />
            <Recipe
                caption="Värjättyä lasia voi sulattaa takaisin värjäämättömäksi."
                image="assets/images/recipes/smelt_tempered_glass.png"
            />
            <Recipe
                caption="Blast furnacella hiiliblockista voi sulattaa mustan väriaineen."
                image="assets/images/recipes/black_dye.png"
            />
            <Recipe
                caption="Nyt myös eri prismarine tyyppejä voi muuntaa täys blockeiksi."
                image="assets/images/recipes/prismarine_block.png"
            />
            <Recipe
                caption="Chainmail Armorit rakennetaan iron bareista samalla tavalla kuin normaalit armorit. Tarvittava raaka-aine on iron bar."
                image="assets/images/recipes/chainmail_armor.png"
            />
            <Recipe
                caption="Coral faneja voi muuttaa Coraleiksi."
                image="assets/images/recipes/fire_coral.png"
            />
            <Recipe
                caption="Laittamalla kaksi slabia päällekkäin mistä tahansa puumateriaalista tekee siitä kokonaisen plankin."
                image="assets/images/recipes/plank.png"
            />
            <Recipe
                caption="Voit tehdä pelaajan pään. :) Raaka-aineina Bone block, Emerald, Diamond, Golden Apple ja Rotten flesh."
                image="assets/images/recipes/player_head.png"
            />
            <Recipe
                caption="Ja Zombien pään. Raaka-aineina Golden Apple, Bone block ja Rotten flesh. :o"
                image="assets/images/recipes/zombie_head.png"
            />
            <Recipe
                caption="Voit tehdä myös Skeletonin pään. Raaka-aineina Golden Apple, Bone ja Bone block."
                image="assets/images/recipes/skeleton_head.png"
            />
            <Recipe
                caption="Voit sulattaa smooth stonea hiekaksi."
                image="assets/images/recipes/sand_smooth_stone.png"
            />
            <Recipe
                caption="Enchanted Bottle on myös mahdollista koota. ;)"
                image="assets/images/recipes/xp_bottle.png"
            />
            <Recipe
                caption="Meemi."
                image="assets/images/recipes/dirt.png"
            />
        </div>
    )
}

ReactDOM.render(<RecipeList />, document.getElementById('recipes'));