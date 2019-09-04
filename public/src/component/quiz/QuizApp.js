import Component from '../Component.js';

class QuizApp extends Component {
    renderHTML() {
        const props = this.props;
        console.log(props);

        return /*html*/`
        <div>
            <header id="question-header">
                        <p>${props.questionHeader}</p>
                    </header>
                    <div class="quiz-img-container"><img class="quiz-image" src="${props.image}" alt="portal"></div>
                    <div id="question">
                        <span>${props.questionText}</span>
                    </div>
                    <div id="answer-box">
                        <label class="answer"><input class="answer-input" type="radio" name="question-one"
                            value="answer-one">${props.answerOne}</label>
                        <label class="answer"><input class="answer-input" type="radio" name="question-one"
                            value="answer-two">${props.answerTwo}</label>
                        <label class="answer"><input class="answer-input" type="radio" name="question-one"
                            value="answer-three">${props.answerThree}</label>
                        <label class="answer"><input class="answer-input" type="radio" name="question-one"
                            value="answer-four">${props.answerFour}</label>
                    </div>
                    </div>
        `;
    }
}

export default QuizApp;