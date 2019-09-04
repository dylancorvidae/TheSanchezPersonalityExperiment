import Component from '../Component.js';
import Header from './Header.js';
import QuizApp from '../quiz/QuizApp.js';
import { getQuestion, getAnswers, updateGame, createGame } from '../../services/quiz-api.js';

class App extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const quizApp = new QuizApp();

        const quizOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

        shuffle(quizOrder);

        createGame(1);
        // .then((id) => {
        //     updateGame({ id: id, quizOrder: quizOrder.join('') });
        // });



        function shuffle(arr) { // Fisher-Yates Shuffle. Source: https://javascript.info/task/shuffle
            for(let i = arr.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }


        let quizProps = {};

        getQuestion(1)
            .then(data => {
                quizProps.questionHeader = 'Question 1';
                quizProps.image = data.img;
                quizProps.questionText = data.question_text;
                this.state.quizProps = quizProps;
                quizApp.update(quizProps);
            })
            .catch(err => {
                console.log(err);
            });

        getAnswers(1)
            .then(data => {
                quizProps.answerOne = data[0].text;
                quizProps.answerTwo = data[1].text;
                quizProps.answerThree = data[2].text;
                quizProps.answerFour = data[3].text;
                this.state.quizProps = quizProps;
                quizApp.update(quizProps);
            });

        dom.querySelector('#quiz-box').appendChild(quizApp.renderDOM());

    }

    renderHTML() {
        return /*html*/`
            <div id="root">
                <div class="wrapper">
                    <div id="back-button"><button class="back-btn"><img
                            class="back-btn-img"
                            src="assets/icons/portal-gun.png">BACK</button></div>
                    <section id="quiz-box">
                    </section>
                    <div id="forward-button"><button class="next-btn"><img
                            class="next-btn-img"
                            src="assets/icons/portal-gun.png">NEXT</button></div>

                </div>            
            </div>
        `;
    }
}

export default App;




  // Find user ID
        //      JS: get token
        //      SELECT id where token = [token]
        // Load test / make new game
        //      SELECT id FROM game WHERE users_id = [userID];
        //      JS: if doesn't exist, make new game
        //      INSERT INTO game (users_id) VALUES [userID]; 
        // New: Randomize IDs in js array.
        //      SELECT id FROM test
        //      JS: randomize ids
        //      UPDATE game SET question_order = [questionOrder] WHERE user_id = [userID]
        // Old: Get last test id
        //      SELECT id FROM game where user_id = [userID] ORDER BY id DESC LIMIT 1
        // Old: Get question order and answers
        //      SELECT question_order, answer FROM game WHERE id = [lastTestId] 
        // On change radio button, get answer's MBTI
        //      SELECT mbti FROM answers WHERE id = [answer.id];
        // On change radio button, update test table
        //      JS: get answers, append `${answer.mbti},`
        //      UPDATE test SET answers = [newAnswer];
        //      
        // back and forward buttons go up and down the array, loading data by ID
        // back button updates test table to remove answer
        //      JS: get answers, remove -5 characters
        //      UPDATE test SET answers = [newAnswer];
        // forward button disabled if question is unanswered
        //  


        // getGames()
        // makeNewGame()
        // 
        //
        //
        //
