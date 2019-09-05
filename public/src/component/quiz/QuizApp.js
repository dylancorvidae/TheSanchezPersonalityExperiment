import Component from '../Component.js';

class QuizApp extends Component {
    renderHTML() {
        const props = this.props;
        if (!props.length) {
            return `<div></div>`
        }

        return /*html*/`
        <div>
            <header id="question-header">
                        <p>QUESTION X</p>
                    </header>
                    <div class="quiz-img-container"><img class="quiz-image" src="${props.questions.img}" alt="portal"></div>
                    <div id="question">
                        <span>${props.questions.question_text}</span>
                    </div>
                    <div id="answer-box">
                        <label class="answer"><input class="answer-input" type="radio" name="question-one"
                            value="answer-one">${props.answers[0].text}</label>
                        <label class="answer"><input class="answer-input" type="radio" name="question-one"
                            value="answer-two">${props.answers[1].text}</label>
                        <label class="answer"><input class="answer-input" type="radio" name="question-one"
                            value="answer-three">${props.answers[2].text}</label>
                        <label class="answer"><input class="answer-input" type="radio" name="question-one"
                            value="answer-four">${props.answers[3].text}</label>
                    </div>
                    </div>
        `;
    }
}

export default QuizApp;