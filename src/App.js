import React, { useState, useEffect } from 'react';
import CardsGrip from './components/cardsGrip/cardsGrip.component';
import SearchBox from './components/searchBox/searchBox.component';
import NextPreviousPageBar from "./components/nextPreviousPageBar/nextPreviousPageBar.component";

const App = () => {
  const [games, setGames] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [searchGame, setSearchGame] = useState("");

  const url =
    page !== 1
      ? `https://api.rawg.io/api/games?page=${page}`
      : `https://api.rawg.io/api/games`;

  const searchUrl = `https://api.rawg.io/api/games?search=${searchGame}`;

  const proxyCORSUrl = "https://cors-anywhere.herokuapp.com/";

  useEffect(() => {
    fetch(proxyCORSUrl + `${searchGame.length === 0 ? url : searchUrl}`, {
      method: "GET",
      headers: {
        "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        "x-rapidapi-key": process.env.REACT_APP_RAWG_API_KEY,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setGames(data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page, searchGame]);

  const changePage = (direction) => {
    if (direction === "next") {
      setPage(page + 1);
    } else if (direction === "previous") {
      setPage(page - 1);
    } else if (direction === "firstPage") {
      setPage(1);
    }
  }

  return (
    <div className="container mx-auto">
      <SearchBox searchGame={searchGame} setSearchGame={(text) => setSearchGame(text)} />
        {isLoading ? (
          <h1 className="text-6xl text-center mx-auto mt-32">Loading..</h1>
        ) : (
          <CardsGrip games={games}/>
        )}
      <NextPreviousPageBar searchGame={searchGame} page={page} changePage={changePage} />
    </div>
  );
}

export default App;
