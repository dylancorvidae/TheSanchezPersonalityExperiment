import Component from '../Component.js';
import Header from './Header.js';
import MainChar from '../profile/mainChar.js';
import ProfileResults from '../profile/ProfileResults.js';

class ProfileApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const mainCharProps = {
            name: 'Morty',
            image: 'https://imgix.ranker.com/user_node_img/50054/1001066706/original/the-mortiest-morty-is-very-special-photo-u1?w=650&q=50&fm=pjpg&fit=crop&crop=faces',
            status: `Status: Alive`,
            species: `Species: Human`,
            gender: `Gender: Male`,
            origin: `Origin: Earth (C-137)`,
            personality: `INTJ`git pu
        };


        const mainChar = new MainChar(mainCharProps);
        dom.querySelector('#main-char').appendChild(mainChar.renderDOM());

        const profileResults = new ProfileResults();
        dom.querySelector('#results-wrapper').appendChild(profileResults.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div id="root">

            <div id="main-char">

            </div>

            <div id="results-wrapper">
            <h1>PREVIOUS RESULTS</h1>

            </div>
        `;
    }
}

export default ProfileApp;