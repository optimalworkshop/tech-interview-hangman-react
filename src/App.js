import React, { useState } from 'react';
import { random } from 'faker';
import Game from './Game';

import './App.scss';

const App = () => {
  const [word, setWord] = useState(random.word().toLowerCase());

  const [gameId, setGameId] = useState(random.uuid);

  return (
    <div className="app">
      <Game key={gameId} word={word} lives={10} />
    </div>
  );
};

export default App;
