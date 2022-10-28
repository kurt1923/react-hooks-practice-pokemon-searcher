import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ displayPoke, handleDeletedPokemon }) {

  const pokemonCards = displayPoke.map((pokemons) => (
    <PokemonCard key={pokemons.id} pokemon={pokemons} handleDeletedPokemon={handleDeletedPokemon} />
  ))
  

  return (
    <Card.Group itemsPerRow={6}>      
      {pokemonCards}      
    </Card.Group>
  );
}

export default PokemonCollection;
