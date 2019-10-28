import Component from '../Component.js';

class MainChar extends Component {
    renderHTML() {
        const props = this.props;
        if(props.image) {
            return /*html*/`
            <div id="main-char">
                <div class="title">
                    <p class="first">YOU ARE</p> 
                    <p><span class="character">${props.name.toUpperCase()}</span></p>
                    <p class="quote">${props.quote}</p>
                </div>
                <div id="main-img-container" class="main-img">
                    <img class="main-img" src="${props.image}";>
                </div>

                <div class="list-container">
                    <div class="personality">
                        <h2>${props.personality} (${props.title})</h2>
                            <p><span class="description">${props.description}</span></p>
                    </div>

                    <ul class="details">
                        <li>Status: ${props.status}</li>
                        <li>Species: ${props.species}</li>
                        <li>Gender: ${props.gender}</li>
                        <li>Origin: ${props.origin}</li>
                    </ul>
                </div>
            </div>
            </div>
        `;
        }
        else {
            return /*html*/`
            <div></div>
            `;
        }
    }
}

export default MainChar;