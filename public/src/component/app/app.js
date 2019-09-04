import Component from '../Component.js';
import Header from './Header.js';
import QuizApp from '../quiz/QuizApp.js';

class App extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const quizProps = {
            quizLength: 10,
            questionText: `Whoa, spoilers! I'm a whole season behind. You
                            don't
                            know me! Well he roped me into this! I wanna be
                            alive, I
                            am alive!
                            Alive i tell you. Mother, I love you.`,
            questionHeader: 'Question 1',
            image: `assets/img/portal-realistic-background.gif`,
            answerOne: 'Answer ONE!!!!!!',
            answerTwo: 'Answer TWO!!!!!!',
            answerThree: 'Answer THREEeeeeee!!!!!!',
            answerFour: 'Answer FOURRRRLOKO!!!!!!',

        };

        const quizApp = new QuizApp(quizProps);
        dom.querySelector('#quiz-box').appendChild(quizApp.renderDOM());
    }

    renderHTML() {
        return /*html*/`
            <div id="root">
                <div class="wrapper">
                    <div id="back-button">BACK</div>
                    <section id="quiz-box">
                    </section>
                    <div id="forward-button">NEXT</div>

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
