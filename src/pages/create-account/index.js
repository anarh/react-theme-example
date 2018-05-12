import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Button from '../../components/button';
import Input from '../../components/input';

class CreateAccount extends Component {
  constructor (props) {
    super(props);

    this.state = {
      checkValidity: false,
      submitted: false,
      accountCreated: false,
      usernameAlreadyExists: false,
      emailAlreadyExists: false
    };

    this.errorMessages = {
      required: 'required',
      userExists: 'Username already exists',
      emailExists: 'Email address already exists'
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  async handleSubmit (e) {
    e.preventDefault();
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

    if (this.props.createAccount.isError) {
      return this.setState({ accountCreated: false });
    }

    this.props.history.push('/login');
  }

  async handleUsernameCheck (e) {
    e.preventDefault();
    const input = e.target;
    const username = e.target.value.trim();

    if (!username) return;

    await this.props.actions.checkForExistingUsername({ username });

    if (this.props.createAccount.usernameAlreadyExists) {
      input.setCustomValidity(this.errorMessages.userExists);
      return this.setState({
        usernameAlreadyExists: this.props.createAccount.usernameAlreadyExists,
        checkValidity: true
      });
    }

    input.setCustomValidity('');
    return this.setState({
      usernameAlreadyExists: false,
      checkValidity: true
    });
  }

  async handleEmailCheck (e) {
    e.preventDefault();
    const input = e.target;
    const email = e.target.value.trim();

    if (!email) return;

    await this.props.actions.checkForExistingEmail({ email });

    if (this.props.createAccount.emailAlreadyExists) {
      input.setCustomValidity(this.errorMessages.emailExists);
      return this.setState({
        emailAlreadyExists: this.props.createAccount.emailAlreadyExists,
        checkValidity: true
      });
    }

    input.setCustomValidity('');
    return this.setState({
      emailAlreadyExists: false,
      checkValidity: true
    });
  }

  render () {
    const store = this.props;
    const checkValidity = this.state.checkValidity;
    const inputErrorMessage = () => {
      if (this.state.usernameAlreadyExists) {
        return this.errorMessages.userExists;
      }

      if (this.state.emailAlreadyExists) {
        return this.errorMessages.emailExists;
      }

      return this.errorMessages.required;
    };

    return <main className='main-content'>
      <div className='container'>
        <section className='doc-content'>
          <div className={`hiq-well hiq-create-account-well`}>
            <h1 className='login-form-header'>Create Account</h1>
            <p className='is-login-form-message'>Create a merchant account with the following information</p>

            {
              this.props.createAccount.isError && (
                <p className={`is-form-error`} role='alert' aria-atomic='true'>
                  An error occurred while creating account.
                </p>
              )
            }

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
                  title='required'
                  type='text'
                />

                <Input
                  checkValidity={checkValidity}
                  className='input-container'
                  id='merchantDescription'
                  label='Merchant Description'
                  name='merchantDescription'
                  store={store}
                  title='required'
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
                  onBlur={(e) => { this.handleUsernameCheck(e); }}
                  required
                  store={store}
                  title={inputErrorMessage()}
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
                  title='required'
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
                  title='required'
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
                  title='required'
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
                  onBlur={(e) => { this.handleEmailCheck(e); }}
                  required
                  store={store}
                  title={inputErrorMessage()}
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
                  title='required'
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
    </main>;
  }
}

CreateAccount.propTypes = {
  className: PropTypes.string
  // locale: PropTypes.object.isRequired,
  // config: PropTypes.object.isRequired
};

CreateAccount.defaultProps = {
  className: ''
};

export default CreateAccount;
