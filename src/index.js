import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Provider, subscribe } from 'react-contextual';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Components
import header from './components/header';

// Pages
import index from './pages/index';
import login from './pages/login';
import createAccount from './pages/create-account';

import { initialState, actions } from './state';

// require('babel-core/register');
// require('babel-polyfill');

const Header = subscribe()(header);
const Index = subscribe()(index);
const Login = subscribe()(login);
const CreateAccount = subscribe()(createAccount);

const ProtectedRoute = subscribe()(({
  component: Component,
  isAuthenticated,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated
        ? (<Component {...props} />)
        : (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)}
  />
));

ReactDOM.render(
  <Provider initialState={initialState} actions={actions} >
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <ProtectedRoute exact path='/' component={Index} />
        <Route path='/login' component={Login} />
        <Route path='/create-account' component={CreateAccount} />
      </React.Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

