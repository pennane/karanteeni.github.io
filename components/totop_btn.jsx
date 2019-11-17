'use strict';

window.onscroll = function() {scrollFunction()};

const scrollFunction = () => {
  if (document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
    document.getElementById("toTop").style.display = "block";
  } else {
    document.getElementById("toTop").style.display = "none";
  }
}

class ScrollToTopButton extends React.Component {
    constructor(props) {
        super(props);

        this.onclick = this.onclick.bind(this);
    }

    onclick() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

    render() {
        return (
            <button class="btn btn-outline-light kara-btn" onClick={this.onclick} id="toTop" title="Takaisin ylös"><i class="fas fa-arrow-up"></i></button>
        )
    }
}

const node = document.querySelector('#top');
ReactDOM.render(<ScrollToTopButton/>, node);