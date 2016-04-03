const React = require('react');
const auth  = require('../helpers/auth');

const Navbartwo = React.createClass({
  render: function() {
    return (
      <div>
        <nav>
          <ul>
            <li id="login">
              <a id="login-trigger" href="">
                Logout
              </a>             
            </li>
          </ul>
        </nav>
      </div>
    )
  }
})

module.exports = Navbartwo;