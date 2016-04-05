const React = require('react');
const auth  = require('../helpers/auth');

const SignupForm = React.createClass({
  render: function() {
    return (
      <div id="signup-title">
        <h4>SIGN UP</h4>
        <form>
          <div>
            <label htmlFor="email">Your email</label>
            <input type="email" placeholder="email@email.com" id="email"></input>
          </div>
          <div>
            <label htmlFor="password">Your password</label>
            <input type="password" placeholder="password" id="password"></input>
          </div>
          <div>
            <input type="submit" value="Submit"></input>
          </div>
        </form>
      </div>
    )
  }
})

module.exports = SignupForm;