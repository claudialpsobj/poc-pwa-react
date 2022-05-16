import React from "react";
import "./App.css";
import ListPokemons from "./ListPokemons";
import SearchPokemons from "./SearchPokemons";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPokemons />} />
        <Route path="/list" element={<ListPokemons />} />
      </Routes>
    </Router>
  );
}

export default App;
