import Component from '../Component.js';

class SignIn extends Component {

    onRender(form) {
        const onSignIn = this.props.onSignIn;

        form.addEventListener('submit', event => {
            event.preventDefault();

            const formDaddy = new FormData(form);

            const userCred = {
                email: formDaddy.get('email'),
                password: formDaddy.get('password')
            };
            onSignIn(userCred);
        });

    }

    renderHTML() {
        return /*html*/`
            <form class="auth-form">
                <p>
                    <label for="signin-email">Email</label>
                    <input id="signin-email" type="email" name="email" required placeholder="licklicklick@myballs.me">
                </p>
                
                <p>
                    <label for="signin-password">Password</label>
                    <input id="signin-password" type="password" name="password" required placeholder="
                    vitaedolorsit69!">
                </p>

                <p>
                    <button id="signin-button">Sign In</button>
                </p>
            </form>
        `;
    }
}

// email placeholder for NSFW version licklicklick@myballs.com

export default SignIn;