import React from 'react';
import { shallow } from 'enzyme';
import GameDetails from '../Components/GameDetails.component';
//mock
import { GameData } from '../mock/gamedata.mock';

it('Snapshot tests GameDetails', () => {
  expect(
    shallow(<GameDetails game={GameData.api.game[0]} />)
  ).toMatchSnapshot();
});
