import React, { Component } from 'react';

class Index extends Component {
  render () {

    return <main className='main-content'>
      <div className='container'>
        <h1>Home</h1>
      </div>
    </main>;
  }
}

Index.propTypes = {
  // store: PropTypes.object.isRequired
};

Index.defaultProps = {

};

export default Index;
