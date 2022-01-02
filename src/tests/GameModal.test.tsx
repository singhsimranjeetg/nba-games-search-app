import React from 'react';
import { shallow } from 'enzyme';
import GameModal from '../Components/GameModal';
//mock
import { GameData } from '../mock/gamedata.mock';

it('Snapshot tests GameModal', () => {
  expect(
    shallow(
      <GameModal
        open
        handleModalChange={() => {}}
        game={GameData.api.game[0]}
      />
    )
  ).toMatchSnapshot();
});
