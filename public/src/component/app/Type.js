import Component from '../Component.js';

class Type extends Component {
    renderHTML() {
        const props = this.props;
        return /*html*/`
            <div class="type">
                    <span>${props.name}</span>
                    <img
                        src="${props.image}"
                        title="${props.quote}">
                    <span>${props.personality}</span>
                    <ul>
                        <li>Status: ${props.status}</li>
                        <li>Species: ${props.species}</li>
                        <li>Gender: ${props.gender}</li>
                        <li>Origin: ${props.origin}</li>
                    </ul>
                </div>
        `;
    }
}

export default Type;