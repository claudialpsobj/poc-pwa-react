import axios from "axios";
import React, { useCallback, useState } from "react";
import "./App.css";

const SearchPokemons = () => {
  const [search, setSearch] = useState(null);
  const [pokeData, setPokeData] = useState(null);

  const onChange = useCallback((event) => {
    setSearch(event.target.value);
  }, []);

  const searchPokemon = useCallback(async () => {
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${search}`
      );
      setPokeData(data);
    } catch (err) {
      window.prompt("Não encontrado!", "");
    }
  }, [search]);

  return (
    <div className="App">
      <header className="App-header">
        <div>search</div>
        <input type={"text"} name="search" onChange={onChange} value={search} />
        <button onClick={searchPokemon}>Buscar</button>
        <br></br>
        <div>Pokemon info:</div>
        <div>Nome: {pokeData?.name}</div>
        <div>Peso: {pokeData?.weight}</div>
        <div>Tipo: {pokeData?.types[0]?.type?.name}</div>
      </header>
    </div>
  );
};

export default SearchPokemons;
