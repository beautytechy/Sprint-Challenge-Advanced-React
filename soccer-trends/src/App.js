import React, { Component } from 'react';
import './App.css';
import data from "../src/data";
import PlayerCard from "./components/PlayerCard";

class App extends Component {

  state = {
    playerinfo: [],
    

  };

  componentDidMount() {
    
        this.setState({
         
          playerinfo: data.data
        });
      }

  render() {
    console.log(this.state.playerinfo);
    return (
      <div className="App">
        <header className="App-header">
         Women's Soccer Trends
         <PlayerCard
           playerdata={this.state.playerinfo}
           />
        </header>
          
        
          
          />

       

      </div>

    );
  }
}
export default App;
