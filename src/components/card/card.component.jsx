import React, { useEffect } from 'react';

const Card = ({ game }) => {
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    // const [name, metacritic, playtime, platforms, genres] = image;
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={game.background_image} alt="cardGame" />
        <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl-mb-2">
            {game.name}
          </div>
          <ul>
            <li>
              <strong>Metacritic Score: </strong>
              {game.metacritic}
            </li>
            <li>
              <strong>Playtime: </strong>
              {game.playtime} hours
            </li>
            <li>
              <strong>Release Date: </strong>
              {game.released}
            </li>
          </ul>
        </div>
        <div className="px-6 py-4">
          {Object.entries(game.genres).map(([index, genre]) => 
            <span
              key={index}
              className="inline-block 
                                    bg-gray-200 
                                    rounded-full 
                                    px-3 py-1 
                                    text-sm 
                                    font-semibold 
                                    text-gray-700 
                                    mr-2"
            >
              #{genre.name}
            </span>
          )}
        </div>
      </div>
    );
}

export default Card;
