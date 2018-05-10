/* global describe, it */

import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import cheerio from 'cheerio';
import Adapter from 'enzyme-adapter-react-16';

import Header from './';
const shallow = Enzyme.shallow;

Enzyme.configure({ adapter: new Adapter() });

// const test = function (store) {
//   describe('Header Component', function () {
//     describe('#markup', function () {
//       const wrapper = shallow(<Header />);
//       const $ = cheerio.load(wrapper.render().html());

//       it('should contain logo', function () {
//         assert.ok(wrapper.find('a.theme-logo img').length);
//       });
//     });
//   });
// };

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});
