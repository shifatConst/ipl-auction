import logo from './logo.svg';
import './App.css';
import playersData from './data/data.json'
import { useEffect, useState } from 'react';
import Players from './Components/Players/Players';
import Cart from './Components/Cart/Cart';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [players, setPlayers] = useState([]);
  const [addPlayer, setAddPlayer] = useState([]);
  const handleAddPlayer = player => {
    const playerList = [...addPlayer, player];
    setAddPlayer(playerList);
    // console.log(player);
  }
  useEffect(() =>{
    setPlayers(playersData);
  }, []);

  return (
    <div className="container">

      <h3 className="total-player">Total players: {players.length}</h3>
      <Cart addPlayer={addPlayer}></Cart>
      <div>
      {
        players.map(player => <Players player={player} handleAddPlayer={handleAddPlayer} key={player.id}> </Players>)
      }
      </div>
    </div>
  );
}

export default App;
