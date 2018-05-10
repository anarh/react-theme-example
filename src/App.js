import React, { Component, Fragment } from 'react';

import './App.css';
import Header from './components/header';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <main className='main-content'>
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
                <ul className='hiq-account-links'>
                  <li>
                    <small><a href='#'>Forgot Username</a></small>
                  </li>
                  <li>
                    <small><a href='#'>Forgot Password</a></small>
                  </li>
                </ul>
                <ul className='hiq-account-links'>
                  <li>
                    <small><a href='#'>Create Account</a></small>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </main>
        <footer>
          <div className='container'>copyright 2018 AppyApp</div>
        </footer>
      </Fragment>
    );
  }
}

export default App;
