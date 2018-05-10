import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Provider, subscribe } from 'react-contextual';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

import header from './components/header';
import footer from './components/footer';

import index from './pages/index';
import login from './pages/login';

import { initialState, actions } from './state';

// require('babel-core/register');
// require('babel-polyfill');

const Header = subscribe()(header);
const Footer = subscribe()(footer);

const Index = subscribe()(index);
const Login = subscribe()(login);

const ProtectedRoute = subscribe()(({component: Component, isAuthenticated, ...rest}) => (
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
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();

