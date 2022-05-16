import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

const Home = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div>Home</div>
        <div>
          <Link to={"/search"}>Search</Link>
        </div>
        <div>
          <Link to={"/list"}>list</Link>
        </div>
      </header>
    </div>
  );
};

export default Home;
