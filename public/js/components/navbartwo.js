const React = require('react');
const auth  = require('../helpers/auth');

const Navbartwo = React.createClass({
  handleHome: function(e) {
    e.preventDefault();
  },

  handleLogout: function(e) {
    e.preventDefault();
    auth.logout();
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
            <li id="signup">
              <a href="" onClick={this.handleLogout}>LOGOUT</a>
            </li>
          </ul>
        </nav>
      </div>
    )
  }
})

module.exports = Navbartwo;