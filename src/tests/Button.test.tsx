import React from 'react';
import { shallow } from 'enzyme';
import Button from '../Components/Button';

it('Snapshot tests Button', () => {
  expect(shallow(<Button onClick={() => {}} />)).toMatchSnapshot();
});
