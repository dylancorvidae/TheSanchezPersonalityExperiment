import Component from '../Component.js';
import Header from './Header.js';
import Type from './Type.js';

class StatsApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const typeProps = {
            name: 'Toxic Rick',
            image: 'https://rickandmortyapi.com/api/character/avatar/361.jpeg',
            quote: `I'm a f****** genius and a god!`,
            personality: 'INTJ',
            status: 'Status: Dead',
            species: 'Species: Humanoid',
            type: `Type: Rick's Toxic Side`,
            gender: `Gender: Male`,
            origin: `Origin: Alien Spa`,
        };

        const type = new Type(typeProps);
        dom.querySelector('#types').appendChild(type.renderDOM());
        dom.querySelector('#types').appendChild(type.renderDOM());
        dom.querySelector('#types').appendChild(type.renderDOM());
        dom.querySelector('#types').appendChild(type.renderDOM());
        dom.querySelector('#types').appendChild(type.renderDOM());
        dom.querySelector('#types').appendChild(type.renderDOM());
        dom.querySelector('#types').appendChild(type.renderDOM());
        dom.querySelector('#types').appendChild(type.renderDOM());
        dom.querySelector('#types').appendChild(type.renderDOM());
        dom.querySelector('#types').appendChild(type.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div id="root">
                <section id="all-time-stats">
                    <h2>ALL TIME STATS</h2>
                    <div id="bar-graph">
                        <canvas id="all-user-stats" width="100" height="40">
                        </canvas>
                        <!-- insert bar graph -->
                    </div>
                </section>

                <div id ="types-wrapper">
                <h2>PERSONALITY TYPES</h2>
                <div id="types">

                </div>
            </div>
        `;
    }
}

export default StatsApp;