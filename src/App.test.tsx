import { shallow, render } from 'enzyme';
import React from 'react';

import App from './App';
import GameDetails from './Components/GameDetails.component';
import GameComponent from './Components/Game';
import GameModal from './Components/GameModal';
import Button from './Components/Button';
import Card from './Components/Card';

//mock
import { GameData } from './mock/gamedata.mock';

describe('rendering components', () => {
  it('expect to render App Component', () => {
    shallow(<App />);
  });
  it('expect to render Game Component', () => {
    shallow(<GameComponent game={GameData.api.game[0]} />);
  });
  it('expect to render GameDetails Component', () => {
    shallow(<GameDetails game={GameData.api.game[0]} />);
  });
  it('expect to render GameModal Component', () => {
    shallow(
      <GameModal
        game={GameData.api.game[0]}
        open
        handleModalChange={() => {}}
      />
    );
  });
  it('expect to render Button Component', () => {
    shallow(<Button onClick={() => {}} />);
  });
  it('expect to render Card Component', () => {
    shallow(<Card />);
  });
});

describe('Test <App />', () => {
  it('renders a search button', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('#search-button').exists()).toBeTruthy();
  });
});

//snapshot tests
it('App', () => {
  expect(shallow(<App />)).toMatchSnapshot();
});
