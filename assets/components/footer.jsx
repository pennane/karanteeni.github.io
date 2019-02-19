'use strict';

class Footer extends React.Component {
    render() {
        return (
            <div class="container">
                &copy; Karanteeni 2019 <span class="text-float-right">Karanteeni UI</span>
            </div>
        )
    }
}

ReactDOM.render(<Footer />, document.getElementById('footer'))