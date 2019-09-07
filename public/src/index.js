import App from './component/app/app.js';

const app = new App();
const body = document.querySelector('body');

body.prepend(app.renderDOM());

