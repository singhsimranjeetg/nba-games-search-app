import { shallow } from 'enzyme';
import React from 'react';

import App from './App';
// import GameDetails from './Components/GameDetails.component';

describe('rendering components', () => {
  it('expect to render App Component', () => {
    shallow(<App />);
  });
});
