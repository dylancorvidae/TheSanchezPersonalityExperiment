import Component from '../Component.js';

class MainChar extends Component {
    renderHTML() {
        const props = this.props;
        return /*html*/`
            <div id="most-common-character">
                    YOU ARE <h1><span>${props.name.toUpperCase()}</span></h1>
                    <img
                        src="${props.image}"
                        height="400" ;>
                    <ul>
                        <li><h2>${props.personality}</h2></li>
                        <li>${props.status}</li>
                        <li>${props.species}</li>
                        <li>${props.gender}</li>
                        <li>${props.origin}</li>
                    </ul>
                </div>
        `;
    }
}

export default MainChar;