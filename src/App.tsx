import { useState } from 'react';
import styled from 'styled-components';
import Card from './Components/Card';
import { GlobalStyles } from './global.styles';
import { AppProvider, Autocomplete } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';
import SearchMajor from './assets/SearchMajor.svg';
import { ListAction } from './util/interfaces';
import GameComponent from './Components/Game';

// Mock Data
import { GamesData } from './mock/gamesByDate';

//real
// const API_KEY = process.env.REACT_APP_API_KEY;
// const HOST_URL = `api-nba-v1.p.rapidapi.com`;

const AppContainer = styled.div`
  display: flex;
  height: 100%;
`;

const ContentContainer = styled.div`
  position: relative;
  display: flex;
  padding: 2rem 1rem;
  flex-direction: column;
  max-width: 1080px;
  align-items: center;

  @media (min-width: 769px) {
    width: 70%;
    margin: auto;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

const SelectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  justify-content: flex-start;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;

  & button {
    margin-left: auto;
    margin-right: 0;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 769px) {
    min-width: 480px;
    margin-right: 2rem;
    width: calc(60% - 2rem);
  }
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SearchIcon = styled.img`
  height: 24px;
  width: 24px;
  vertical-align: middle;
`;

const ActionsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 1rem 0;
  justify-content: flex-end;
  align-items: center;

  & > button:not(:first-child) {
    margin-left: 1.5rem;
  }
`;

const Button = styled.button`
  font-size: 16px;
  font-weight: 600;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  border: none;
  background: #1fae51;

  &:hover {
    cursor: pointer;
    background: #1fae30;
  }
`;

const GameInstructions = () => (
  <label className='detail'>
    click on a game to get more details or scorecard
  </label>
);

const App = () => {
  const [searchResults, setSearchResults] = useState<any>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSearchQuery, setActiveSearchQuery] = useState('');

  const getGamesByDate = async (date: string) => {
    //real
    // fetch(`https://${HOST_URL}/games/date/${date}`, {
    //   method: 'GET',
    //   headers: {
    //     'x-rapidapi-host': `${HOST_URL}`,
    //     'x-rapidapi-key': `${API_KEY}`,
    //   },
    // })
    //   .then(async (response) => {
    //     const results = await response.json();
    //     if (results) {
    //       // const formattedList = formatMovies(results.api.games);
    //       setSearchResults(results.api.games);
    //       setActiveSearchQuery(searchQuery);
    //     } else {
    //       setBannerText('No games related to that date were found!');
    //       clearSearch();
    //     }

    //     // setGameDetails(results.api.game);
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
    setSearchResults(GamesData);
    setActiveSearchQuery(searchQuery);
    console.log('searchresults', searchResults);
  };

  interface GameListProps {
    games: any;
    activeDisabled?: boolean;
    action: ListAction;
  }
  const GameList = ({
    games,
    action,
    activeDisabled = false,
  }: GameListProps) => (
    <div>
      {games.map((game: any) => (
        <GameComponent
          key={game.gameId}
          action={action}
          game={game}
          disabled={activeDisabled}
        ></GameComponent>
      ))}
    </div>
  );

  return (
    <AppProvider i18n={enTranslations}>
      <AppContainer>
        <GlobalStyles />
        <ContentContainer>
          <SelectionContainer>
            <HeaderContainer>
              <h1>NBA Games Search App</h1>
            </HeaderContainer>
            <label>Search games by date using the date picker below.</label>

            <CardsContainer>
              <SearchContainer>
                <Card>
                  <Autocomplete.TextField
                    onChange={(e) => setSearchQuery(e)}
                    label='Games Date'
                    value={searchQuery}
                    prefix={<SearchIcon alt='search icon' src={SearchMajor} />}
                    type='date'
                  />
                  <ActionsContainer>
                    <Button
                      onClick={() => getGamesByDate(searchQuery)}
                      id='search-button'
                    >
                      Search
                    </Button>
                  </ActionsContainer>
                </Card>
                <Card>
                  <label>
                    <b>
                      Games results{' '}
                      {activeSearchQuery
                        ? `for ${' '} ${activeSearchQuery}`
                        : 'will appear here'}
                    </b>
                  </label>
                  {activeSearchQuery && (
                    <ListContainer id='search-results'>
                      <GameInstructions />
                      <GameList
                        games={searchResults}
                        action='ADD'
                        activeDisabled
                      />
                    </ListContainer>
                  )}
                </Card>
              </SearchContainer>
            </CardsContainer>
          </SelectionContainer>
        </ContentContainer>
      </AppContainer>
    </AppProvider>
  );
};

export default App;
