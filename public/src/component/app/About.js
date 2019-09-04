import Component from '../Component.js';
import Header from '../app/Header.js';
import AboutCard from './AboutCard.js';
import { about } from '../../../../data/about-us.js';

class AboutApp extends Component {
    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const cardContainer = dom.querySelector('#about-card-container');

        about.forEach(elem => {
            const aboutCard = new AboutCard({ name: elem.name, image: elem.image, desc: elem.desc });
            cardContainer.appendChild(aboutCard.renderDOM());
        });

    }
    renderHTML() {
        return /*html*/`
        <div id="root">
            <div id="about-container">
                <h1>About "Us"</h1>
                
                <div id="about-card-container">


                </div>
            </div>
        </div>
        `;
    }
}

export default AboutApp;