import Component from '../Component.js';
import Header from './Header.js';
import Type from './Type.js';
import { getCharacter, getCharacterFromApi } from '../../services/quiz-api.js';

class StatsApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());
        let allProps = [];

        getCharacter().then(result => {

            result.forEach(char => {
                let typeProps = {};

                typeProps.name = char.name;
                typeProps.quote = char.quote;
                typeProps.personality = char.mbti;

                getCharacterFromApi(char.name)
                    .then(result => {
                        typeProps.image = result.results[0].image;
                        typeProps.status = result.results[0].status;
                        typeProps.species = result.results[0].species;
                        typeProps.gender = result.results[0].gender;
                        typeProps.origin = result.results[0].origin.name;

                    });

                allProps.push(typeProps);

            });



        })
            .then(() => {

                allProps.forEach(prop => {
                    const type = new Type(prop);
                    dom.querySelector('#types').appendChild(type.renderDOM());
                });
            });
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