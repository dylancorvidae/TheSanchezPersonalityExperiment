import Component from '../Component.js';

class QuizApp extends Component {
    renderHTML() {
        const props = this.props;

        return /*html*/`
        <div>
            <header id="question-header">
                        <p><h1>${props.questionHeader} / ${props.quizLength}</h1></p>
                    </header>
                    <div id="img" style="background-image:
                        URL('${props.image}')"> 
                        <span>${props.questionText}</span>
                    </div>
                    <div id="answer-box">
                    <label for="question-one"><input type="radio" name="question-one"
                            value="answer-one">${props.answerOne}</label>
                            <label for="question-two"><input type="radio" name="question-one"
                            value="answer-two">${props.answerTwo}
                            </label>
                            <label for="question-three"><input type="radio" name="question-one"
                            value="answer-three">${props.answerThree}</label>
                            <label for="question-four"><input type="radio" name="question-one"
                            value="answer-four">${props.answerFour}</label>
                    </div>
                    </div>
        `;
    }
}

export default QuizApp;