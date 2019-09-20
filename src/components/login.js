import React from 'react';
import { Redirect } from 'react-router-dom';
import GuestLayout from './guest-layout';
import cookie from '../libs/cookie';
import Authenticator from './fake-authenticator';
import authentication from 'react-azure-adb2c';
import AuthApp from './msal/AuthApp';

authentication.initialize({
  // optional, will default to this
  instance: 'https://login.microsoftonline.com/tfp/', 
  // your B2C tenant
  tenant: 'shoprb2c.onmicrosoft.com',
  // the policy to use to sign in, can also be a sign up or sign in policy
  signInPolicy: 'B2C_1_web_signup_signin',
  // the the B2C application you want to authenticate with (that's just a random GUID - get yours from the portal)
  applicationId: 'ef58c4f3-eeeb-43e2-8bbe-bddf9658c058',
  // where MSAL will store state - localStorage or sessionStorage
  cacheLocation: 'sessionStorage',
  // the scopes you want included in the access token
  scopes: ['https://shoprb2c.onmicrosoft.com/api/user_impersonation'],
  // optional, the redirect URI - if not specified MSAL will pick up the location from window.href
  redirectUri: 'http://localhost:3003',
  // optional, the URI to redirect to after logout
  postLogoutRedirectUri: 'http://localhost:3003'
});

export default class Login extends React.Component {

  onLoginRedirectUrl = '/dashboard';

  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      loggedIn: false,
      error: '',
      errorMsg: '',
    };
  }

  componentDidMount() {
    const isLoggedIn = Authenticator.isLoggedIn();
    if (isLoggedIn) {
      this.setState({
        loaded: true,
        loggedIn: true,
      });
    } else {
      this.setState({
        loaded: true,
      });
    }
  }

  handleSubmit(e) {
    if (e && e.preventDefault) e.preventDefault();
    const loginData = new FormData(e.target);
    const username = loginData.get('username');
    const password = loginData.get('password');
    if (username !== 'demo' || password !== 'demo') {
      this.setState({
        error: username !== 'demo' ? 'username' : 'password',
        errorMsg: 'Please use username:password as demo:demo',
      });
    } else {
      cookie.setItem('secretKey', 'allowmein');
      this.setState({
        loggedIn: true,
      });
    }
  }

  render() {
    const {
      loggedIn,
      error,
      errorMsg,
      loaded,
    } = this.state;
    if (!loaded) return null;
    if (loggedIn) {
      return <Redirect push={false} to={this.onLoginRedirectUrl} />;
    }
    return (
      <GuestLayout>
        <div className="columns is-centered p-t-xl p-r-md p-l-md">
          <div className="column is-half">
            <div className="box">
              <h1 className="title">Login</h1>
              <form onSubmit={e => this.handleSubmit(e)}>
                <div className="field">
                  <label className="label" htmlFor="username">
                    username
                    <div className="control">
                      <input
                        defaultValue="demo"
                        id="username"
                        name="username"
                        className={`input ${error === 'username' ? 'is-danger' : ''}`}
                        type="text"
                        placeholder="Username input"
                      />
                    </div>
                  </label>
                </div>
                <div className="field">
                  <label className="label" htmlFor="password">
                    Password
                    <div className="control">
                      <input
                        defaultValue="demo"
                        id="password"
                        name="password"
                        className={`input ${error === 'password' ? 'is-danger' : ''}`}
                        type="password"
                        placeholder="********"
                      />
                    </div>
                  </label>
                </div>
                <div className="field is-grouped">
                  <div className="control">
                    <button type="submit" className="button is-link">Login</button>
                  </div>
                </div>
                {
                  error !== '' && (
                    <p className="help is-danger">
                      {errorMsg}
                    </p>
                  )
                }
              </form>
            </div>
          </div>
        </div>
      </GuestLayout>
    );
  }
}
