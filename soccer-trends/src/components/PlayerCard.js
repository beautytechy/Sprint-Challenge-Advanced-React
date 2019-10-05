import React from "react";
import "../App.css";

const PlayerCard = (props) => {
    console.log("playercard props", props)
    // const { name } = props.playerdata;
    // const { country } = props.playerdata;
    // const { searches } = props.playerdata;
    return (
        <div className="players">
        {props.playerdata.map((item) => (
        
                <div className="player-container">
                <h3>{item.name}</h3>
                <p>{item.country}</p>
                </div>
                
      ))}


        </div>
    )
}

export default PlayerCard;