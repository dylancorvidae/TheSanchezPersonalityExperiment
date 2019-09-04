import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header id="main-header">
                <div id="logo">

                <h1 class="title">
                    The Sanchez Personality Experiment
                </h1>

                </div>
                <a href="./profile.html"><span>Profile</span></a>
                <a href="./about.html"><span>About Us</span></a>
                <a href="./stats.html"><span>Stats</span></a>
                <div id="log-out-container">
                <button id="log-out">Log out</button>
                </div>
            </header>
        `;
    }
}

export default Header;