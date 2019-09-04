import Component from '../Component.js';

class AboutCard extends Component {
    renderHTML() {
        const props = this.props;

        return /*html*/`
           <div class="about-card">
                    ${props.name}
                    <div id="img-wrapper">
                        <img src="${props.image}">
                    </div>
                    <p>${props.desc}</p>
                </div> 
        `;
    }
}

export default AboutCard;