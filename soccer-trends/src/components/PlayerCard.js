import React, { Component } from "react";
import "../App.css";

class PlayerCard extends Component {


  render() {
    return (
      <div data-testid="player" key={this.props.id}>
        <h2>{this.props.name}</h2>
        <h2>{this.props.country}`}</h2>
        <h2>{this.props.searches}`}</h2>
      </div>
    );
  }
}

export default PlayerCard;