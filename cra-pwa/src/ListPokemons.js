import React, { useCallback, useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function ListPokemons() {
  const [pokemon, setPokemon] = useState([]);

  const getPokemon = useCallback(async () => {
    try {
      const { data: poke1 } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/1`
      );
      const { data: poke2 } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/2`
      );
      const { data: poke3 } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/3`
      );
      setPokemon([poke1, poke2, poke3]);
    } catch (err) {
      console.warn(err);
    }
  }, []);

  useEffect(() => {
    getPokemon();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <link rel="manifest" href="/manifest.json"></link>
        {pokemon.map((poke) => (
          <div key={poke.id}>{`Pokémon: ${poke?.name} `}</div>
        ))}
        <p>POC PWA</p>
      </header>
    </div>
  );
}

export default ListPokemons;
