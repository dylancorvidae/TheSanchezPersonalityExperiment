import Component from '../Component.js';
import Header from './Header.js';
import MainChar from '../profile/mainChar.js';
import ProfileResults from '../profile/ProfileResults.js';
import { getGames } from '../../services/quiz-api.js';

class ProfileApp extends Component {

    onRender(dom) {

        //CALCULATE LATEST GAME RESULT

        let userMBTI = '';

        getGames()
            .then(data => {
                const gameIds = data.reduce((acc, val) => {
                    acc.push(val.id);
                    return acc;
                }, []);

                const lastGame = Math.max.apply(Math, gameIds);

                const answer = data.find(val => {
                    return val.id = lastGame;
                });

                const userAnswer = answer.user_answer.split(',');
                const userTotals = userAnswer.reduce((acc, val) => {
                    const answer = val.split('');
                    answer.forEach(letter => {
                        acc[letter]++;
                    });
                    return acc;
                }, { E: 0, I: 0, S: 0, N: 0, F: 0, T: 0, P: 0, J: 0 });

                userTotals.E > userTotals.I ? userMBTI += 'E' : userMBTI += 'I';
                userTotals.S > userTotals.N ? userMBTI += 'S' : userMBTI += 'N';
                userTotals.F > userTotals.T ? userMBTI += 'F' : userMBTI += 'T';
                userTotals.P > userTotals.J ? userMBTI += 'P' : userMBTI += 'J';

            }).catch(err => {
                // eslint-disable-next-line no-console
                console.log(err);
            });

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