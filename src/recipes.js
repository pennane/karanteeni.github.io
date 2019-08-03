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
                        "Karanteenilla on omia reseptej\xE4, wohoo."
                    ),
                    React.createElement(Recipes, { recipe: this.props.recipe })
                )
            );
        }
    }]);

    return RecipeList;
}(React.Component);

function Recipes(props) {
    return React.createElement(
        "div",
        { className: "col-lg-6 m-auto text-center" },
        React.createElement(Chainmail, { recipe: props.recipe }),
        React.createElement(Coral, { recipe: props.recipe }),
        React.createElement(Plank, { recipe: props.recipe }),
        React.createElement(PHead, { recipe: props.recipe }),
        React.createElement(ZHead, { recipe: props.recipe }),
        React.createElement("br", null),
        React.createElement(SkelHead, { recipe: props.recipe }),
        React.createElement("br", null),
        React.createElement(SmeltGravel, { recipe: props.recipe }),
        React.createElement("br", null),
        React.createElement(SmeltSand, { recipe: props.recipe }),
        React.createElement("br", null),
        React.createElement(XpBot, { recipe: props.recipe }),
        React.createElement("br", null),
        React.createElement(Dirt, { recipe: props.recipe })
    );
}

function Chainmail(props) {
    return React.createElement(
        "figure",
        { className: "figure mb-5" },
        React.createElement(CmailImg, { img: props.img }),
        React.createElement(CmailCap, { cap: props.img })
    );
}

function CmailImg(props) {
    return React.createElement("img", { src: "assets/images/recipes/chainmail_armor.png", alt: "", className: "img-fluid recipe" });
}

function CmailCap(props) {
    return React.createElement(
        "figcaption",
        { className: "figure-caption" },
        "Chainmail Armorit rakennetaan iron bareista samalla tavalla kuin normaalit armorit. Tarvittava raaka-aine on iron bar."
    );
}

function Coral(props) {
    return React.createElement(
        "figure",
        { className: "figure mb-5" },
        React.createElement(CoralImg, { img: props.img }),
        React.createElement(CoralCap, { cap: props.cap })
    );
}

function CoralImg(props) {
    return React.createElement("img", { src: "assets/images/recipes/fire_coral.png", alt: "", className: "img-fluid recipe" });
}

function CoralCap(props) {
    return React.createElement(
        "figcaption",
        { className: "figure-caption" },
        "Coral faneja voi muuttaa Coraleiksi."
    );
}

function Plank(props) {
    return React.createElement(
        "figure",
        { className: "figure mb-5" },
        React.createElement(PlankImg, { img: props.img }),
        React.createElement(PlankCap, { cap: props.cap })
    );
}

function PlankImg(props) {
    return React.createElement("img", { src: "assets/images/recipes/plank.png", alt: "", className: "img-fluid recipe" });
}

function PlankCap(props) {
    return React.createElement(
        "figcaption",
        { className: "figure-caption" },
        "Laittamalla kaksi slabia p\xE4\xE4llekk\xE4in mist\xE4 tahansa puumateriaalista tekee siit\xE4 kokonaisen plankin."
    );
}

function PHead(props) {
    return React.createElement(
        "figure",
        { className: "figure mb-5" },
        React.createElement(PHeadImg, { img: props.img }),
        React.createElement(PHeadCap, { cap: props.cap })
    );
}

function PHeadImg(props) {
    return React.createElement("img", { src: "assets/images/recipes/player_head.png", alt: "", className: "img-fluid recipe" });
}

function PHeadCap(props) {
    return React.createElement(
        "figcaption",
        { className: "figure-caption" },
        "Voit tehd\xE4 pelaajan p\xE4\xE4n. :) Raaka-aineina Bone block, Emerald, Diamond, Golden Apple ja Rotten flesh."
    );
}

function ZHead(props) {
    return React.createElement(
        "figure",
        { className: "figure mb-5" },
        React.createElement(ZHeadImg, { img: props.img }),
        React.createElement(ZHeadCap, { cap: props.cap })
    );
}

function ZHeadImg(props) {
    return React.createElement("img", { src: "assets/images/recipes/zombie_head.png", alt: "", className: "img-fluid recipe" });
}

function ZHeadCap(props) {
    return React.createElement(
        "figcaption",
        { className: "figure-caption" },
        "Ja Zombien p\xE4\xE4n. Raaka-aineina Golden Apple, Bone block ja Rotten flesh. :o"
    );
}

function SkelHead(props) {
    return React.createElement(
        "figure",
        { className: "figure mb-5" },
        React.createElement(SkelHeadImg, { img: props.img }),
        React.createElement(SkelHeadCap, { cap: props.cap })
    );
}

function SkelHeadImg(props) {
    return React.createElement("img", { src: "assets/images/recipes/skeleton_head.png", alt: "", className: "img-fluid recipe" });
}

function SkelHeadCap(props) {
    return React.createElement(
        "figcaption",
        { className: "figure-caption" },
        "Voit tehd\xE4 my\xF6s Skeletonin p\xE4\xE4n. Raaka-aineina Golden Apple, Bone ja Bone block."
    );
}

function SmeltGravel(props) {
    return React.createElement(
        "figure",
        { className: "figure mb-5" },
        React.createElement(SmeltGImg, { img: props.img }),
        React.createElement(SmeltGCap, { cap: props.cap })
    );
}

function SmeltGImg(props) {
    return React.createElement("img", { src: "assets/images/recipes/smelt_gravel.png", alt: "", className: "img-fluid recipe" });
}

function SmeltGCap(props) {
    return React.createElement(
        "figcaption",
        { className: "figure-caption" },
        "Voit sulattaa stonea graveliksi."
    );
}

function SmeltSand(props) {
    return React.createElement(
        "figure",
        { className: "figure mb-5" },
        React.createElement(SmeltSImg, { img: props.img }),
        React.createElement(SmeltSCap, { cap: props.cap })
    );
}

function SmeltSImg(props) {
    return React.createElement("img", { src: "assets/images/recipes/smelt_sand.png", alt: "", className: "img-fluid recipe" });
}

function SmeltSCap(props) {
    return React.createElement(
        "figcaption",
        { className: "figure-caption" },
        "Ja gravelia hiekaksi, mahdollistaen lasin tekemisen stonesta. :)"
    );
}

function XpBot(props) {
    return React.createElement(
        "figure",
        { className: "figure mb-5" },
        React.createElement(XpBotImg, { img: props.img }),
        React.createElement(XpBotCap, { cap: props.cap })
    );
}

function XpBotImg(props) {
    return React.createElement("img", { src: "assets/images/recipes/xp_bottle.png", alt: "", className: "img-fluid recipe" });
}

function XpBotCap(props) {
    return React.createElement(
        "figcaption",
        { className: "figure-caption" },
        "Enchanted Bottle on my\xF6s mahdollista koota. ;)"
    );
}

function Dirt(props) {
    return React.createElement(
        "figure",
        { className: "figure mb-5" },
        React.createElement(DirtImg, { img: props.img }),
        React.createElement(DirtCap, { cap: props.cap })
    );
}

function DirtImg(props) {
    return React.createElement("img", { src: "assets/images/recipes/dirt.png", alt: "", className: "img-fluid recipe" });
}

function DirtCap(props) {
    return React.createElement(
        "figcaption",
        { className: "figure-caption" },
        "Meemi."
    );
}

ReactDOM.render(React.createElement(RecipeList, null), document.getElementById('recipes'));