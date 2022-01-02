import React from 'react';
import { shallow } from 'enzyme';
import GameComponent from '../Components/Game';
//mock
import { GameData } from '../mock/gamedata.mock';

it('Snapshot tests GameComponent', () => {
  expect(
    shallow(<GameComponent game={GameData.api.game[0]} />)
  ).toMatchSnapshot();
});
