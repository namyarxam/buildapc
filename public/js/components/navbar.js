const React = require('react');
const auth  = require('../helpers/auth');

const Navbar = React.createClass({
  componentDidMount: function() {
    $('#login-trigger').click(function(e) {
      e.preventDefault();
      $(this).next('#login-content').toggle();
      $(this).toggleClass('active');                    
      
      if ($(this).hasClass('active')) {
        $('#slider').html('&#x25B2;');
      } else {
        $('#slider').html('&#x25BC;');
      }
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

  render: function() {
    return (
      <div>
        <nav>
          <ul>
            <li id="login">
              <a id="login-trigger" href="">
                Log in <span id="slider">&#x25BC;</span>
              </a>
              <div id="login-content">
                <form>
                  <fieldset id="inputs">
                    <input id="username" type="email" ref="email" placeholder="Your email address" required/>   
                    <input id="password" type="password" ref="password" placeholder="Password" required/>
                  </fieldset>
                  <fieldset id="actions">
                    <input type="submit" id="submit" onClick={this.handleLogin} value="Log in"/>
                    <label><input type="checkbox" onChange={this.checkHandler} /> Keep me signed in</label>
                  </fieldset>
                </form>
              </div>                     
            </li>
            <li id="signup">
              <a href="" onClick={this.handleSignup}>Sign up</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
})

module.exports = Navbar;