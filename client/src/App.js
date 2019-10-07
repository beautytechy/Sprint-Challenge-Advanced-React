import React from 'react';
import './App.css';
import useFetch from "./hooks/useFetch";
import PlayerCard from "./components/PlayerCard";


const App = () => {

  const [playerdata, setPlayers] = useFetch('http://localhost:5000/api/players');

  return (
    <div className="App">
      <h1>Soccer Searches</h1>
      <div className="players">
        {playerdata.map(item => {
          return (
            <PlayerCard
              key={item.id}
              name={item.name}
              country={item.country}
              searches={item.searches}
            />
          )
        })
        }
      </div>
    </div>
  );
}

export default App;