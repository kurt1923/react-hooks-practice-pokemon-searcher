import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon, handleDeletedPokemon }) {
  const [showFront, setShowFront] =useState(true)
  const {id, name, hp, sprites} = pokemon

function handleShowFront(){
  setShowFront(!showFront)
}
function handleDeleteClick() {
  fetch(`http://localhost:3001/pokemon/${id}`, {
    method: "DELETE",
  });

  handleDeletedPokemon(id);
}

  return (
    <Card>
      <div onClick={handleShowFront}>
        <div className="image">
          <img src= {showFront ? sprites.front : sprites.back} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </Card>
  );
}

export default PokemonCard;
