import App from './component/app/app.js';

const app = new App();

document.querySelector('body').prepend(app.renderDOM());