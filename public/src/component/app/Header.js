import Component from '../Component.js';

class Header extends Component {
    renderHTML() {
        return /*html*/`
            <header id="main-header">
                <div id="logo">

                </div>
                <a href="./profile.html"><span>Profile</span></a>
                <a href="./about.html"><span>About Us</span></a>
                <a href="./stats.html"><span>Stats</span></a>

                <button id="log-out">Log out</button>
            </header>
        `;
    }
}

export default Header;