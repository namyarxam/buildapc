const React = require('react');
const auth  = require('../helpers/auth');

const Navbar = React.createClass({
  componentDidMount: function() {
    $('#login-trigger').click(function(e) {
      e.preventDefault();
      $(this).next('#login-content').slideToggle();
      $(this).toggleClass('active');                    
    })
  },

  getInitialState: function() {
    return {
      error: false
    }
  },

  checkHandler: function(e) {
    // Needed to handle JSX error
  },

  handleLogin: function(e) {
    e.preventDefault();
    const email = this.refs.email.value;
    const pass  = this.refs.password.value;

    auth.login(email, pass, (loggedIn) => {
      if (!loggedIn) {
        return this.setState({ error: true });
      }
    });
  },

  handleSignup: function(e) {
    e.preventDefault();
    this.props.signUpClicked(true);
  },

  handleHome: function(e) {
    e.preventDefault();
    this.props.signUpClicked(false);
  },

  render: function() {
    return (
      <div>
        <nav>
          <img id="logo" src="images/logo.png"></img>
          <ul id="navul">
            <li id="signup">
              <a href="" onClick={this.handleHome}>HOME</a>
            </li>
            <li id="login">
              <a id="login-trigger" href="">
                LOG IN
              </a>
              <div id="login-content">
                <form id="loginform">
                  <fieldset id="inputs">
                    <input id="username" type="email" ref="email" placeholder="Your email address" required/>   
                    <input id="password" type="password" ref="password" placeholder="Password" required/>
                  </fieldset>
                  <fieldset id="actions">
                    <input type="submit" id="submit" onClick={this.handleLogin} value="Log in"/>
                    <label id="checklabel"><input type="checkbox" onChange={this.checkHandler} /> Keep me signed in</label>
                  </fieldset>
                </form>
              </div>                     
            </li>
            <li id="signup">
              <a href="" onClick={this.handleSignup}>SIGN UP</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
})

module.exports = Navbar;