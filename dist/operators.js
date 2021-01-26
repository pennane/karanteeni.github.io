'use-strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var rankToMissingText = function rankToMissingText(rank) {
    switch (rank) {
        case "omistajat":
            return 'Sellout';
        case "adminit":
            return 'Olisikohan jostakin operaattorista tähän hommaan?';
        case "operaattorit":
            return 'Operaattoreita ei näkyvillä';
        case "moderaattorit":
            return 'Hmm.. moderaattoreistahan on pulaa! Haku ylläpitoon on aina auki!';
        case "rakentajat":
            return 'Ei rakentajia? Kuka nyt rakentaa Gauriksen spawnit?';
    }
};

var YpWrapper = function YpWrapper(props) {
    return React.createElement(
        'div',
        { className: 'yp-wrapper' },
        props.children
    );
};

var YpCard = function YpCard(props) {
    return React.createElement(
        'div',
        { className: 'admin-card-container ' + props.rank },
        React.createElement(
            'div',
            { className: 'admin-card ' + props.rank },
            React.createElement(
                'div',
                { className: 'background ' + props.rank },
                React.createElement(
                    'div',
                    { className: 'avatar ' + props.rank },
                    React.createElement('img', { src: 'https://visage.surgeplay.com/full/' + props.uuid })
                )
            ),
            React.createElement(
                'div',
                { className: 'admin-content ' + props.rank },
                React.createElement(
                    'div',
                    { className: 'admin-type ' + props.rank },
                    props.rank
                ),
                React.createElement(
                    'div',
                    { className: 'admin-name ' + props.rank },
                    props.name
                ),
                React.createElement(
                    'div',
                    { className: 'admin-strength ' + props.rank },
                    props.children
                )
            ),
            React.createElement(
                'div',
                { className: 'admin-footer' },
                React.createElement(
                    'p',
                    null,
                    props.desc
                )
            )
        )
    );
};

var Strength = function Strength(props) {
    return React.createElement(
        'p',
        null,
        React.createElement('i', { className: 'far fa-arrow-alt-circle-right admin-strength-bullet' }),
        props.children
    );
};

var Rank = function Rank(_ref) {
    var data = _ref.data,
        rank = _ref.rank;

    return React.createElement(
        'div',
        null,
        React.createElement(
            'h3',
            { className: 'tag ' + rank + ' yp-header' },
            rank
        ),
        React.createElement(
            YpWrapper,
            null,
            data.length === 0 && React.createElement(
                'p',
                null,
                rankToMissingText(rank)
            ),
            data.length >= 0 && data.map(function (item, key) {
                return React.createElement(
                    YpCard,
                    { key: key, rank: rank, uuid: item.uuid, name: item.nimi, desc: item.kuvaus },
                    item.vahvuudet.map(function (str, index) {
                        return React.createElement(
                            Strength,
                            { key: index },
                            str
                        );
                    })
                );
            })
        )
    );
};

var Admininstration = function Admininstration() {
    var _React$useState = React.useState(null),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        adminData = _React$useState2[0],
        setAdminData = _React$useState2[1];

    var _React$useState3 = React.useState([]),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        adminRanksArray = _React$useState4[0],
        setAdminRanksArray = _React$useState4[1];

    React.useEffect(function () {
        var request = new Request('/modules/Operators/operators.json');
        fetch(request).then(function (response) {
            return response.json();
        }).then(function (data) {
            setAdminData(data);
            setAdminRanksArray(Object.keys(data));
        });
    }, []);

    return React.createElement(
        'div',
        null,
        adminData && adminRanksArray && adminRanksArray.map(function (rank) {
            return React.createElement(Rank, { key: rank, rank: rank, data: adminData[rank] });
        })
    );
};

ReactDOM.render(React.createElement(Admininstration, null), document.getElementById("adminstration"));