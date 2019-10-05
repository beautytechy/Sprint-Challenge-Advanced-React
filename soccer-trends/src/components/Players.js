import React from "react";
import { useFetch } from "./hooks";
import PlayerCard from "./PlayerCard";

const Players = ({players}) =>{
    return(
        <div>
            {players.map((player, index) =>{
                return <PlayerCard key={index} {...player} />
            })}
        </div>
    )
};

export default Players;