import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

class SideNavigation extends Component {
  render () {
    return this.props.isAuthenticated && <Fragment>
      <button className='mobile-toc-toggle' id='mobile-toc-toggle'>
        <span>+</span>
      </button>
      <nav className='toc'>
        <div className='toc-wrapper'>
          <ul className='page-nav'>
            <li className={`toc-entry toc-h1`}>
              <Link to='/'>Home</Link>
            </li>
            <li className={`toc-entry toc-h1`}>
              <Link to='/hiq/guide/theming/'>Virtual Terminal</Link>
            </li>
            <li className={`toc-entry toc-h1`}>
              <Link to='/hiq/guide/theming/'>Orders</Link>
            </li>
            <li className={`toc-entry toc-h1`}>
              <Link to='/hiq/guide/layout/'>Products</Link>
            </li>
            <li className={`toc-entry toc-h1`}>
              <Link to='/hiq/guide/layout/'>Customers</Link>
            </li>
            <li className={`toc-entry toc-h1`}>
              <Link to='/hiq/guide/layout/'>Reports</Link>
            </li>
            <li className={`toc-entry toc-h1`}>
              <Link to='/hiq/guide/layout/'>Tools</Link>
            </li>
            <li className={`toc-entry toc-h1`}>
              <Link to='/hiq/guide/layout/'>Billing</Link>
            </li>
            <li className='toc-entry toc-h1 active'>
              <Link to={`/settings`}>Settings</Link>
              <ul className='section-nav'>
                <li className={`toc-entry toc-h2`}>
                  <Link to={`/settings/merchant`}>Merchant</Link>
                </li>
                <li className={`toc-entry toc-h2`}>
                  <Link to={`/settings/users`}>Users</Link>
                  <ul>
                    <li className={`toc-entry toc-h3`}>
                      <Link to='#adding-font-families'>Add User</Link>
                    </li>
                  </ul>
                </li>
                <li className={`toc-entry toc-h2`}>
                  <Link to={`/settings/themes`}>Themes</Link>
                </li>
                <li className={`toc-entry toc-h2`}>
                  <Link to={`/settings/profile`}>Profile</Link>
                </li>
              </ul>
            </li>
            <li className={`toc-entry toc-h1`}>
              <Link to='/hiq/guide/meters-progress/'>Sign Out</Link>
            </li>
          </ul>
        </div>
      </nav>
    </Fragment>;
  }
}

SideNavigation.propTypes = {
};

export default SideNavigation;
