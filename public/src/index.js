import App from './component/app/app.js';
// import { getBackground } from './services/nasa-api.js';


// const backgroundImage = getBackground('2019-01-01');
const app = new App();
const body = document.querySelector('body');

body.prepend(app.renderDOM());
// body.style = `background-image: URL('${backgroundImage.url}')`;

