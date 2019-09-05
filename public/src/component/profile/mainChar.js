import Component from '../Component.js';

class MainChar extends Component {
    renderHTML() {
        const props = this.props;
        return /*html*/`
        <div>
            <div id="main-img-container" class="main-img">
                <img class="main-img" src="${props.image}" height="500";>
            </div>

            <div class="list-container">
                <div class="title">
                    <p class="first">YOU ARE</p> 
                    <p><span class="character">${props.name.toUpperCase()}</span></p>
                    <p class="quote">${props.quote}</p>
                </div>

                <div class="personality">
                    <h2>${props.personality}</h2>
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
        `;
    }
}

export default MainChar;