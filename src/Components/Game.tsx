import styled from 'styled-components';
import { useCallback, useState } from 'react';
import GameModal from './GameModal';

const MovieContainer = styled.div`
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

// type GameProps = {
//   Game: Movie;
//   action: ListAction;
//   onClick: (e?: React.MouseEvent) => void;
// } & React.ButtonHTMLAttributes<HTMLButtonElement>;

type GameProps = any;

const GameComponent = ({ game, disabled, onClick, action }: GameProps) => {
  const [movieModalOpen, setMovieModalOpen] = useState(false);

  const handleModalChange = useCallback(
    () => setMovieModalOpen(!movieModalOpen),
    [movieModalOpen]
  );

  return (
    <MovieContainer>
      <GameModal
        handleModalChange={handleModalChange}
        game={game}
        open={movieModalOpen}
      />
      <p
        onClick={() => setMovieModalOpen(true)}
      >{`${game.hTeam.fullName} VS ${game.vTeam.fullName}`}</p>
    </MovieContainer>
  );
};

export default GameComponent;
