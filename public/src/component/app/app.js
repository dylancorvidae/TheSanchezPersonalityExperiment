import Component from '../Component.js';
import Header from './Header.js';
import QuizApp from '../quiz/QuizApp.js';

class App extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        // quiz props
        // Load question IDs
        //      SELECT id from questions;
        // Randomize IDs in js array
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