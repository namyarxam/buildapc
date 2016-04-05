'use strict'

/* Global Requires */
const React       = require('react');
const ReactDOM    = require('react-dom');

/* External Components */
const auth        = require('./helpers/auth');
const requireAuth = require('./helpers/requireauth');
const Login       = require('./components/login');
const Logout      = require('./components/logout');
const Signup      = require('./components/signup');
const Navbar      = require('./components/navbar');
const Navbartwo   = require('./components/navbartwo');
const SignupForm  = require('./components/signupform');

/* Application */
const App = React.createClass({
  getInitialState: function() {
    return {
      loggedIn: auth.loggedIn(),
      signUpClicked: false
    }
  },

  updateAuth: function(loggedIn) {
    this.setState({
      loggedIn: loggedIn
    })
  },

  updateSUC: function(boolean) {
    this.state.signUpClicked = boolean;
    this.setState({ signUpClicked: boolean })
  },

  componentWillMount: function() {
    auth.onChange = this.updateAuth;
    auth.login();
  },

  render: function() {
    return (
      <div className="main">
        <header className="cf">
          {this.state.loggedIn ? <Navbartwo /> : <Navbar signUpClicked={this.updateSUC} />}
        </header>
        <div className="title-container">
        </div>
        <div>
          {this.state.signUpClicked ? <SignupForm /> : <div></div>}
        </div>
      </div>
    )
  }
})

ReactDOM.render(<App />, document.querySelector('#container'))