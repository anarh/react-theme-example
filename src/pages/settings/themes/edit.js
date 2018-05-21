import React, { Component } from 'react';
import Input from '../../../components/input';
import Button from '../../../components/button';

class ThemeEdit extends Component {
  render () {
    const baseUrl = process.env.REACT_APP_BASE_URL;

    return <div className='main-content-wrapper'>
      <section className='doc-content'>
        <h1>Edit Theme</h1>
        <h2>Theme Name</h2>
        <table className='properties-table'>
          <thead>
            <tr>
              <th>Settings</th>
              <th>Value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className='name'><code>--hiq-meter-background-color</code></td>
              <td>
                <Input
                  className='input-container'
                  id='hiq-meter-background-color'
                  label=''
                  name='hiq-meter-background-color'
                  store={this.props}
                  type='text'
                />
              </td>
            </tr>
            <tr>
              <td className='name'><code>--hiq-meter-strong-color</code></td>
              <td>
                <Input
                  className='input-container'
                  id='hiq-meter-strong-color'
                  label=''
                  name='hiq-meter-strong-color'
                  store={this.props}
                  type='text'
                />
              </td>
            </tr>
            <tr>
              <td className='name'><code>--hiq-meter-good-color</code></td>
              <td>
                <Input
                  className='input-container'
                  id='hiq-meter-good-color'
                  label=''
                  name='hiq-meter-good-color'
                  store={this.props}
                  type='text'
                />
              </td>
            </tr>
            <tr>
              <td className='name'><code>--hiq-meter-weak-color</code></td>
              <td>
                <Input
                  className='input-container'
                  id='hiq-meter-weak-color'
                  label=''
                  name='hiq-meter-weak-color'
                  store={this.props}
                  type='text'
                />
              </td>
            </tr>
          </tbody>
        </table>
        <Button disabled type='submit' label='Cancel' store={this.props} /> <Button disabled type='submit' label='Save Theme' store={this.props}
        />
      </section>
    </div>;
  }
}

ThemeEdit.propTypes = {
  // store: PropTypes.object.isRequired
};

ThemeEdit.defaultProps = {

};

export default ThemeEdit;
