const React = require('react');
const auth  = require('../helpers/auth');

const SignupForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    const email = this.refs.email.value;
    const pass  = this.refs.password.value;

    $.post('/users', { email: email, password: pass })
        .done((data) => {
          console.log('User created.');
        })
        .fail((data) => {
          console.log('Error creating new user');
        })

    this.props.updateAuth(true);
  },

  render: function() {
    return (
      <div id="signup-title">
        <h4>SIGN UP</h4>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="email">Your email</label>
            <input ref="email" type="email" placeholder="email@email.com" id="email"></input>
          </div>
          <div>
            <label htmlFor="password">Your password</label>
            <input ref="password" type="password" placeholder="password" id="password"></input>
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