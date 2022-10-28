import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {

  const [pokemonArray, setPokemonArray] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((res) => res.json())
      .then(setPokemonArray)
  }, [])

  function handleAddPokemon(newPokemon) {
    setPokemonArray([...pokemonArray, newPokemon]);
  }
  function handleDeletedPokemon(id) {
    const updatedPokemonArray = pokemonArray.filter((poke)=> poke.id !== id)
    setPokemonArray(updatedPokemonArray)
  }

  const pokemonsToDisplay = pokemonArray.filter((poke) =>
    poke.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon={handleAddPokemon} />
      <br />
      <Search searchTerm={searchTerm} onChangeSearch={setSearchTerm} />
      <br />
      <PokemonCollection displayPoke={pokemonsToDisplay} handleDeletedPokemon={handleDeletedPokemon}  />
    </Container>
  );
}

export default PokemonPage;
