import React from 'react';
import logo from '../../logo.svg';

class Header extends React.Component {
  render () {
    return <header className='header'>
      <div className={`container is-fluid`}>
        <a href='#'>
          <img src={logo} alt='logo text' className='logo' />
        </a>
      </div>
    </header>;
  }
}

Header.propTypes = {
};

export default Header;