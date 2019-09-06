import Component from '../Component.js';
import Header from './Header.js';
import QuizApp from '../quiz/QuizApp.js';
import { getQuestion, getAnswers, updateGame, createGame, getGames, backOne } from '../../services/quiz-api.js';

class App extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        let answer = '';
        let gameId = 0;
        let questionOrder = [];
        let questionNumber = 1;

        const quizApp = new QuizApp({
            questions: [],
            answers: [],
            selectAnswer: mbti => {
                answer = `${mbti},`;
            }
        });
        dom.querySelector('#quiz-box').appendChild(quizApp.renderDOM());


        //button event listeners

        const backButton = dom.querySelector('#back-button');
        const forwardButton = dom.querySelector('#forward-button');

        forwardButton.addEventListener('click', () => {
            if(questionNumber === 21) {
                endGame();
            } else {
                if(answer) {
                    updateGame({ userAnswer: answer, id: gameId });
                    updateQuiz(parseInt(questionOrder[questionNumber]));
                    questionNumber++;
                    answer = '';
                }
            }
        });

        backButton.addEventListener('click', () => {
            if(questionNumber > 1) {
                backOne({ id: gameId, method: 'back' }).then(result => {
                    resumeGame(result);
                });
            }
        });

        // check if current user has an unfinished game and resume it
        // if not, start a new game

        getGames()
            .then(data => {
                if(data) {
                    const lastGame = data.find(game => {
                        return game.is_complete === false;
                    });
                    lastGame ? resumeGame(lastGame) : newGame();
                } else {
                    newGame();
                }
            }).catch(err => {
                console.log(err);
            });


        function newGame() {
            const quizOrder = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
            shuffle(quizOrder);
            return createGame({ order: quizOrder.join(',') })
                .then(result => {
                    const questionID = result.question_order.split(',');
                    updateQuiz(parseInt(questionID[0]));
                    gameId = result.id;
                    questionOrder = quizOrder;
                });
        }

        function updateQuiz(id) {
            let quizProps = {};

            getQuestion(id)
                .then(data => {
                    quizProps.questionHeader = `Question ${questionNumber}`;
                    quizProps.image = data.img;
                    quizProps.questionText = data.question_text;
                    quizApp.update(quizProps);
                })
                .catch(err => {
                    // eslint-disable-next-line no-console
                    console.log(err);
                });

            getAnswers(id)
                .then(data => {

                    const questionNum = [0, 1, 2, 3];
                    shuffle(questionNum);

                    quizProps.answerOne = data[questionNum[0]].text;
                    quizProps.answerTwo = data[questionNum[1]].text;
                    quizProps.answerThree = data[questionNum[2]].text;
                    quizProps.answerFour = data[questionNum[3]].text;
                    quizProps.answerOneMBTI = data[questionNum[0]].mbti;
                    quizProps.answerTwoMBTI = data[questionNum[1]].mbti;
                    quizProps.answerThreeMBTI = data[questionNum[2]].mbti;
                    quizProps.answerFourMBTI = data[questionNum[3]].mbti;
                    quizApp.update(quizProps);
                });
        }

        function resumeGame(lastGame) {

            let position;
            lastGame.user_answer ? position = lastGame.user_answer.length / 5 : position = 0;

            const order = lastGame.question_order.split(',');
            questionNumber = position + 1;
            gameId = lastGame.id;
            questionOrder = order;

            updateQuiz(parseInt(order[position]));

        }

        function endGame() {
            updateGame({ isComplete: true, id: gameId });
            window.location = './profile.html';
        }


        function shuffle(arr) { // Fisher-Yates Shuffle. Source: https://javascript.info/task/shuffle
            for(let i = arr.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    renderHTML() {
        return /*html*/`
            <div id="root">
                <div class="wrapper">
                    <div id="back-button"><button class="back-btn"><img
                            class="back-btn-img"
                            src="assets/icons/portal-gun.png"><p class="quiz-buttons-p">BACK</p></button></div>
                    <section id="quiz-box">
                    </section>
                    <div id="forward-button"><button class="next-btn"><img
                            class="next-btn-img"
                            src="assets/icons/portal-gun.png"><p class="quiz-buttons-p">NEXT</p></button></div>

                </div>            
            </div>
            `;
    }




}

export default App;