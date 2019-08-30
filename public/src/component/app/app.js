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