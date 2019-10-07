import React, { Component } from "react";
import "../App.css";

class PlayerCard extends Component {

  render() {
    return (
      <div data-testid="playerData" key={this.props.id}>
        <h2>{`Name: ${this.props.name}`}</h2>
        <h2>{`Country: ${this.props.country}`}</h2>
        <h2>{`Searches: ${this.props.searches}`}</h2>
      </div>
    );
  }
}

export default PlayerCard;