'use-strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RecipeList = function (_React$Component) {
    _inherits(RecipeList, _React$Component);

    function RecipeList() {
        _classCallCheck(this, RecipeList);

        return _possibleConstructorReturn(this, (RecipeList.__proto__ || Object.getPrototypeOf(RecipeList)).apply(this, arguments));
    }

    _createClass(RecipeList, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: "col-lg-12 text-center" },
                React.createElement(
                    "div",
                    { className: "card card-body bg-transparent", style: { marginBottom: 1.2 + 'em', fontFamily: +'Source Sans Pro' + '!important' } },
                    React.createElement(
                        "h1",
                        { className: "mt-5" },
                        "Custom Reseptit"
                    ),
                    React.createElement(
                        "p",
                        { className: "lead" },
                        "Vaniljaj\xE4\xE4tel\xF6ll\xE4 on omia reseptej\xE4, wohoo."
                    ),
                    React.createElement(Recipes, { recipe: this.props.recipe })
                )
            );
        }
    }]);

    return RecipeList;
}(React.Component);

var RecipeCap = function (_React$Component2) {
    _inherits(RecipeCap, _React$Component2);

    function RecipeCap(props) {
        _classCallCheck(this, RecipeCap);

        return _possibleConstructorReturn(this, (RecipeCap.__proto__ || Object.getPrototypeOf(RecipeCap)).call(this, props));
    }

    _createClass(RecipeCap, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "figcaption",
                { className: "figure-caption" },
                this.props.caption
            );
        }
    }]);

    return RecipeCap;
}(React.Component);

var RecipeImg = function (_React$Component3) {
    _inherits(RecipeImg, _React$Component3);

    function RecipeImg(props) {
        _classCallCheck(this, RecipeImg);

        return _possibleConstructorReturn(this, (RecipeImg.__proto__ || Object.getPrototypeOf(RecipeImg)).call(this, props));
    }

    _createClass(RecipeImg, [{
        key: "render",
        value: function render() {
            return React.createElement("img", { src: this.props.image, alt: "", className: "img-fluid recipe" });
        }
    }]);

    return RecipeImg;
}(React.Component);

var Recipe = function (_React$Component4) {
    _inherits(Recipe, _React$Component4);

    function Recipe(props) {
        _classCallCheck(this, Recipe);

        return _possibleConstructorReturn(this, (Recipe.__proto__ || Object.getPrototypeOf(Recipe)).call(this, props));
    }

    _createClass(Recipe, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "figure",
                { className: "figure mb-5" },
                React.createElement(RecipeImg, { image: this.props.image }),
                React.createElement(RecipeCap, { caption: this.props.caption })
            );
        }
    }]);

    return Recipe;
}(React.Component);

var Recipes = function Recipes(props) {
    return React.createElement(
        "div",
        { className: "col-lg-6 m-auto text-center" },
        React.createElement(Recipe, {
            caption: "Kaikki lasipaneelityypit voi muuttaa takaisin palikoiksi.",
            image: "assets/images/recipes/glasspane.png"
        }),
        React.createElement(Recipe, {
            caption: "V\xE4rj\xE4tty\xE4 lasia voi sulattaa takaisin v\xE4rj\xE4\xE4m\xE4tt\xF6m\xE4ksi.",
            image: "assets/images/recipes/smelt_tempered_glass.png"
        }),
        React.createElement(Recipe, {
            caption: "Blast furnacella hiiliblockista voi sulattaa mustan v\xE4riaineen.",
            image: "assets/images/recipes/black_dye.png"
        }),
        React.createElement(Recipe, {
            caption: "Nyt my\xF6s eri prismarine tyyppej\xE4 voi muuntaa t\xE4ys blockeiksi.",
            image: "assets/images/recipes/prismarine_block.png"
        }),
        React.createElement(Recipe, {
            caption: "Chainmail Armorit rakennetaan iron bareista samalla tavalla kuin normaalit armorit. Tarvittava raaka-aine on iron bar.",
            image: "assets/images/recipes/chainmail_armor.png"
        }),
        React.createElement(Recipe, {
            caption: "Coral faneja voi muuttaa Coraleiksi.",
            image: "assets/images/recipes/fire_coral.png"
        }),
        React.createElement(Recipe, {
            caption: "Laittamalla kaksi slabia p\xE4\xE4llekk\xE4in mist\xE4 tahansa puumateriaalista tekee siit\xE4 kokonaisen plankin.",
            image: "assets/images/recipes/plank.png"
        }),
        React.createElement(Recipe, {
            caption: "Voit tehd\xE4 pelaajan p\xE4\xE4n. :) Raaka-aineina Bone block, Emerald, Diamond, Golden Apple ja Rotten flesh.",
            image: "assets/images/recipes/player_head.png"
        }),
        React.createElement(Recipe, {
            caption: "Ja Zombien p\xE4\xE4n. Raaka-aineina Golden Apple, Bone block ja Rotten flesh. :o",
            image: "assets/images/recipes/zombie_head.png"
        }),
        React.createElement(Recipe, {
            caption: "Voit tehd\xE4 my\xF6s Skeletonin p\xE4\xE4n. Raaka-aineina Golden Apple, Bone ja Bone block.",
            image: "assets/images/recipes/skeleton_head.png"
        }),
        React.createElement(Recipe, {
            caption: "Voit sulattaa smooth stonea hiekaksi.",
            image: "assets/images/recipes/sand_smooth_stone.png"
        }),
        React.createElement(Recipe, {
            caption: "Enchanted Bottle on my\xF6s mahdollista koota. ;)",
            image: "assets/images/recipes/xp_bottle.png"
        }),
        React.createElement(Recipe, {
            caption: "Meemi.",
            image: "assets/images/recipes/dirt.png"
        })
    );
};

ReactDOM.render(React.createElement(RecipeList, null), document.getElementById('recipes'));