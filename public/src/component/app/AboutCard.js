import Component from '../Component.js';

class AboutCard extends Component {
    renderHTML() {

        
        return /*html*/`
           <div class="about-card">
                    NAME
                    <div id="img-wrapper">
                        <img src="./assets/img/sam-icon.png">
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Obcaecati a impedit, facere repudiandae beatae quae
                        minus nesciunt consequuntur rem ipsam id. Minima
                        incidunt quasi rerum eaque quos? Eaque, quae in?</p>
                </div> 
        `;
    }
}

export default AboutCard;