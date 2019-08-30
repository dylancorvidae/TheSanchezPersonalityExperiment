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
                        <input type="radio" name="question-one"
                            value="answer-one">${props.answerOne}
                        <input type="radio" name="question-one"
                            value="answer-two">${props.answerTwo}
                        <input type="radio" name="question-one"
                            value="answer-three">${props.answerThree}
                        <input type="radio" name="question-one"
                            value="answer-four">${props.answerFour}
                    </div>
                    </div>
        `;
    }
}

export default QuizApp;