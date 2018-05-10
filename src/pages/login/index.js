import React, { Component } from 'react';
import ForgotAccountLinks from '../../components/forgot-account-links';

class Login extends Component {
  render () {

    return <main className='main-content'>
      <div className='container'>
        <section className='doc-content'>
          <div className={'hiq-well hiq-login-well'}>
            <h1>Sign In</h1>
            <form>
              <fieldset>
                <p>
                  <label>Username:</label>
                  <input type='text' />
                </p>
                <p>
                  <label>Password:</label>
                  <input type='password' />
                </p>
                <p>
                  <button className='is-full-width' type='submit'>Submit</button>
                </p>
              </fieldset>
            </form>
            <ForgotAccountLinks />
          </div>
        </section>
      </div>
    </main>;
  }
}

Login.propTypes = {
  // store: PropTypes.object.isRequired
};

Login.defaultProps = {

};

export default Login;
