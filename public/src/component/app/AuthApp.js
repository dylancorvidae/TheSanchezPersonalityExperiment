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

        const error = dom.querySelector('.error');
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

        const switchToSignIn = dom.querySelector('#signin-button');
        switchToSignIn.addEventListener('click', () => {
            signInBox.classList.remove('no-display');
            signUpBox.classList.add('no-display');
        });
        
        const switchToSignUp = dom.querySelector('#signup-button');
        switchToSignUp.addEventListener('click', () => {
            signUpBox.classList.remove('no-display');
            signInBox.classList.add('no-display');
        });
        // dom.querySelector('#signin-button').addEventListener('click', () => {
        //     signInBox.classList.remove('hidden');
        //     signUpBox.classList.add('hidden');
        //     dom.querySelector('#signin-button').classList.add('selected');
        //     dom.querySelector('#signup-button').classList.remove('selected');
        //     error.textContent = '';


        // });

        // dom.querySelector('#signup-button').addEventListener('click', () => {
        //     signInBox.classList.add('hidden');
        //     signUpBox.classList.remove('hidden');
        //     dom.querySelector('#signin-button').classList.remove('selected');
        //     dom.querySelector('#signup-button').classList.add('selected');
        //     error.textContent = '';

        // });


    }


    renderHTML() {
        return /*html*/`
             <div id="root">
             <main>
             <div id="auth-container">
             <p class="errors"></p>
             <section class="no-display" id="signup-box">
                 <p class="switch">
                     <button id="signin-button">Already a User?</button>
                 </p>
             </section>
             <section id="signin-box">
                 <p class="switch">
                     <button id="signup-button">Need to create an Account?</button>
                 </p>
             </section>
             </div>
         </main>
            </div>
        `;
    }
}


//Old Code
// renderHTML() {
//     return /*html*/`
//          <div id="root">
//             <main>
//                 <div id="auth-container">
//              <section id="button-box"> 
//                     <button id="signin-button" class="option selected">Sign In</button>
//                     <button id="signup-button" class="option">Sign Up</button>
//                     </section>
//              <section id="auth-box">
//                 <section id="signin-box">
//                 </section>
//                 <section id="signup-box" class="hidden">
//                 </section>
//                 </section>
//                 <p class="error"></p>
//                 </div>
//             </main>
//         </div>
//     `;
// }



export default AuthApp;