import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/button';
import Input from '../../components/input';

class CreateAccount extends Component {
  constructor (props) {
    super(props);

    this.state = {
      checkValidity: false,
      submitted: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit (e) {
    e.preventDefault();
    if (this.props.isAuthenticated) return this.setState({ redirectToReferrer: true });
    const elements = e.target.elements;
    const firstname = elements.firstname.value.trim();
    const lastname = elements.lastname.value.trim();
    const phone = elements.phone.value.trim();
    const email = elements.email.value.trim();
    const password = elements.password.value.trim();
    const merchantName = elements.merchantName.value.trim();
    const merchantDescription = elements.merchantDescription.value.trim();
    const username = elements.username.value.trim();

    this.setState({
      checkValidity: true,
      submitted: true
    });

    await this.props.actions.createAccount({
      firstname,
      lastname,
      phone,
      email,
      password,
      merchantName,
      merchantDescription,
      username
    });
    this.setState({ submitted: false });

    if (this.props.loginRecovery.isError) return;
    this.props.history.push('/login');
  }

  render () {
    const store = this.props;
    const t = this.props.locale;
    const checkValidity = this.state.checkValidity;

    return <main className='main-content'>
      <div className='container'>
        <section className='doc-content'>
        <div className={'hiq-well hiq-create-account-well'}>
          <h1 className='login-form-header'>Create Account</h1>
          <p className='is-login-form-message'>Create a merchant account with the following information</p>

          <form onSubmit={(e) => { this.handleSubmit(e); }} className={`${this.state.submitted ? 'form-submitted' : ''}`} method='POST' action='/'>
            <div>  
              <Input
                autoFocus
                checkValidity={checkValidity}
                className='input-container'
                id='merchantName'
                label='Merchant Name'
                name='merchantName'
                required
                store={store}
                title='Merchant name required'
                type='text'
              />

              <Input
                checkValidity={checkValidity}
                className='input-container'
                id='merchantDescription'
                label='Merchant Description'
                name='merchantDescription'
                store={store}
                title='Merchant Description'
                type='text'
              />
            </div>
            <div>
              <Input
                checkValidity={checkValidity}
                className='input-container'
                id='username'
                label='Admin Username'
                name='username'
                required
                store={store}
                title='Admin Username'
                type='text'
              />

              <Input
                checkValidity={checkValidity}
                className='input-container'
                id='password'
                label='Admin Password'
                name='password'
                required
                store={store}
                title='Admin Password'
                type='password'
              />
            </div>
            <div>
              <Input
                checkValidity={checkValidity}
                className='input-container'
                id='firstname'
                label='Admin First Name'
                maxLength='40'
                name='firstname'
                required
                store={store}
                title={t['firstname-required']}
                type='text'
              />

              <Input
                checkValidity={checkValidity}
                className='input-container'
                id='lastname'
                label='Admin Last Name'
                maxLength='40'
                name='lastname'
                required
                store={store}
                title={t['lastname-required']}
                type='text'
              />
            </div>
            <div>
              <Input
                checkValidity={checkValidity}
                className='input-container'
                id='email'
                label='Admin Email Address'
                name='email'
                required
                store={store}
                title={t['email-address-required']}
                type='email'
              />

              <Input
                checkValidity={checkValidity}
                className='input-container'
                id='phone'
                label='Admin Phone Number'
                name='phone'
                required
                store={store}
                title='Phone number required'
                type='tel'
              />
            </div>
            <Button
              type='submit'
              className='is-full-width'
              label='Create Account'
              store={store}
            />
          </form>
        </div>
      </section>
    </div>
  </main>
  }
}

CreateAccount.propTypes = {
  className: PropTypes.string,
  // locale: PropTypes.object.isRequired,
  // config: PropTypes.object.isRequired
};

CreateAccount.defaultProps = {
  className: ''
};

export default CreateAccount;
