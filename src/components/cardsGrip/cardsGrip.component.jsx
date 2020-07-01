import React from 'react';
import Card from '../card/card.component';

const CardsGrip = ({ games }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20 mx-5">
    {games.map((game) => (
      <Card key={game.id} game={game} />
    ))}
  </div>
);

export default CardsGrip;

