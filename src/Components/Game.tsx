import styled from 'styled-components';
import { useCallback, useState } from 'react';
import GameModal from './GameModal';

const GameContainer = styled.div`
  display: flex;
  padding: 0.5rem 0;
  align-items: center;

  & p {
    margin-left: 1rem;
    max-width: 300px;
    cursor: pointer;
    text-decoration: underline;
  }
`;

type GameProps = any;

const GameComponent = ({ game }: GameProps) => {
  const [gameModalOpen, setGameModalOpen] = useState(false);

  const handleModalChange = useCallback(
    () => setGameModalOpen(!gameModalOpen),
    [gameModalOpen]
  );

  return (
    <GameContainer>
      <GameModal
        handleModalChange={handleModalChange}
        game={game}
        open={gameModalOpen}
      />
      <p
        onClick={() => setGameModalOpen(true)}
      >{`${game.hTeam.fullName} VS ${game.vTeam.fullName}`}</p>
    </GameContainer>
  );
};

export default GameComponent;
