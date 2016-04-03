const React = require('react');
const auth  = require('../helpers/auth');

const Signup = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },

  handleSubmit: function(event) {
    event.preventDefault();
    const email    = this.refs.email.value;
    const pass     = this.refs.pass.value;
    const username = this.refs.username.value;

    $.post('/users', { email: email, password: pass, username: username })
      .done((data) => {
        console.log('User is created.');
      })
      .fail((data) => {
        console.log('Error creating new user.');
      })

    const { location } = this.props;

    if (location.state && location.state.nextPathname) {
      this.context.router.replace(location.state.nextPathname);
    } else {
      this.context.router.replace('/');
    }
  },

  render: function() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input ref="email" type="email" placeholder="E-mail" />
        <input ref="pass" type="password" placeholder="Password" />
        <input ref="username" type="text" placeholder="Username" /><br />
        <button type="submit">Submit</button>
      </form>
    )
  }
})

module.exports = Signup;