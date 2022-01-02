import React from 'react';
import { shallow } from 'enzyme';
import Card from '../Components/Card';

it('Snapshot tests Card', () => {
  expect(shallow(<Card />)).toMatchSnapshot();
});
