import styled from 'styled-components';
import { Modal } from '@shopify/polaris';
import GameDetails from '../Components/GameDetails.component';

const GameCardContainer = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

interface GameModalProps {
  game: any;
  open: boolean;
  handleModalChange: (e?: React.MouseEvent) => void;
}

const GameModal = ({ game, open, handleModalChange }: GameModalProps) => {
  return (
    <Modal title='Game Details' onClose={handleModalChange} open={open}>
      <Modal.Section>
        <GameCardContainer>
          <GameDetails game={game} key={game} />
        </GameCardContainer>
      </Modal.Section>
      <Modal.Section></Modal.Section>
    </Modal>
  );
};

export default GameModal;
