import Component from '../Component.js';
import Header from './Header.js';
import SignIn from '../auth/signin.js';
import SignUp from '../auth/signup.js';
import { userSignUp, userSignIn } from '../../services/quiz-api.js';
import store from '../../services/store.js';


function verifySuccess(user) {
    store.setToken(user.token);
    const searchParams = new URLSearchParams(location.search);
    location = searchParams.get('redirect') || './index.html';
}

class AuthApp extends Component {

    onRender(dom) {
        const header = new Header();
        dom.prepend(header.renderDOM());

        const error = dom.querySelector('.errors');
        const signUpBox = dom.querySelector('#signup-box');
        const signInBox = dom.querySelector('#signin-box');

        const signUp = new SignUp({
            onSignUp: newUser => {
                error.textContent = '';

                return userSignUp(newUser)
                    .then(user => {
                        verifySuccess(user);
                    })
                    .catch(err => {
                        error.textContent = err;
                    });
            }
        });
        signUpBox.appendChild(signUp.renderDOM());

        const signIn = new SignIn({
            onSignIn: userCred => {
                error.textContent = '';

                return userSignIn(userCred)
                    .then(user => {
                        verifySuccess(user);
                    })
                    .catch(err => {
                        error.textContent = err;
                    });
            }
        });

        signInBox.appendChild(signIn.renderDOM());

        const switchToSignIn = dom.querySelector('#signin-switch-button');
        switchToSignIn.addEventListener('click', () => {
            signInBox.classList.remove('hidden');
            signUpBox.classList.add('hidden');
        });

        const switchToSignUp = dom.querySelector('#signup-switch-button');
        switchToSignUp.addEventListener('click', () => {
            signUpBox.classList.remove('hidden');
            signInBox.classList.add('hidden');
        });
    }


    renderHTML() {
        return /*html*/`
             <div id="root">
             <main>
             <div id="auth-container">
             <p class="errors"></p>
             <section class="hidden" id="signup-box">
                 <p class="switch">
                     <button id="signin-switch-button">Already a User?</button>
                 </p>
             </section>
             <section id="signin-box">
                 <p class="switch">
                     <button id="signup-switch-button">Need to create an Account?</button>
                 </p>
             </section>
             </div>
         </main>
            </div>
        `;
    }
}

export default AuthApp;