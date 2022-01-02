import styled from 'styled-components';

const GameDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;

  p {
    text-align: center;
  }
  .date {
    font-weight: 400;
    margin-bottom: 5px;
  }
  .venue {
    font-weight: 500;
  }
`;

const TeamsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .image-wrapper {
    outline: 5px solid #55c57a;
    -webkit-transform: translateY(-0.5rem);
    -webkit-transform: translateY(-0.5rem);
    -ms-transform: translateY(-0.5rem);
    transform: translateY(-1.5rem);
    box-shadow: 0 0.5rem 4rem rgb(0 0 0 / 10%);
    border-radius: 50%;
    overflow: hidden;
  }
  .name {
    font-weight: 500;
    font-size: 20px;
  }
  .points {
    margin-top: 5px;
    font-weight: 700;
  }
`;
const Image = styled.img`
  width: 150px;
  height: 150px;
  transform: scale(0.8);
`;

const GameDetails = ({ game }: any) => {
  return (
    <>
      <GameDetailsContainer>
        <TeamsContainer>
          <Team key={game.hTeam.teamId} team={game.hTeam} />
          <span>VS</span>
          <Team key={game.vTeam.teamId} team={game.vTeam} />
        </TeamsContainer>
        <div className='mx-auto'>
          <p className='date'>{game.startTimeUTC.slice(0, 10)}</p>
          {game.arena ? (
            <p className='venue'>
              {game.arena}, {game.city}, {game.country}
            </p>
          ) : (
            ''
          )}
        </div>
      </GameDetailsContainer>
    </>
  );
};

const Team = ({ team }: any) => {
  const { fullName, score, logo } = team;
  return (
    <TeamContainer>
      <div className='image-wrapper'>
        <Image src={logo} alt={fullName}></Image>
      </div>
      <p className='name'>{fullName}</p>
      <p className='points'>{score.points}</p>
    </TeamContainer>
  );
};

export default GameDetails;
