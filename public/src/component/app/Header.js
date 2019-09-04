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
                <a href="./profile.html"><span>[profile]</span></a>
                <a href="./about.html"><span>[about us]</span></a>
                <a href="./stats.html" class="stat-link"><span>[stats]</span></a>
                <button id="log-out">[log out]</button>
            </header>
        `;
    }
}

export default Header;