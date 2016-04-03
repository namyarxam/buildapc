/* Authentication Helper, from React.js Documentation */
module.exports = {
  login(email, pass, cb) {
    cb = arguments[arguments.length - 1];
    if (localStorage.token) {
      if (cb) cb(true);
      this.onChange(true);
      return;
    }
    loginRequest(email, pass, (res) => {
      if (res.authenticated) {
        localStorage.token = res.token;
        if (cb) cb(true);
        this.onChange(true);
      } else {
        if (cb) cb(false);
        this.onChange(false);
      }
    })
  },

  signup(email, pass, cb) {
    cb = arguments(arguments.length - 1);
    signupRequest(email, pass, (res) => {
      cb();
    })
  },

  getToken() {
    console.log('auth.js:29: ' + localStorage.token);
    return localStorage.token;
  },

  logout(cb) {
    delete localStorage.token;
    if (cb) cb();
    this.onChange(false);
  },

  loggedIn() {
    return !!localStorage.token;
  },

  onChange() {}
}

/* Sign-up AJAX Request */
function signupRequest(email, pass, cb) {
  $.post('/users/signup', { email: email, password: pass })
    .done((data) => {
      cb({
        status: 201,
        success: true
      })
    })
    .fail((data) => {
      cb({
        status: 202,
        data: data
      })
    })
}

/* Log-in AJAX Request */
function loginRequest(email, pass, cb) {
  $.post('users/login', { email: email, password: pass })
    .done((data) => {
      cb({
        authenticated: true,
        token: data.token
      })
    })
    .fail((data) => {
      cb({
        status: 202,
        data: data
      })
    })
}