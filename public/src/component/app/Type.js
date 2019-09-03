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
                        <li>${props.status}</li>
                        <li>${props.species}</li>
                        <li>${props.type}</li>
                        <li>${props.gender}</li>
                        <li>${props.origin}</li>
                    </ul>
                </div>
        `;
    }
}

export default Type;