import React, { useState } from "react";
import PokeList from "./PokeList";
import data from "../data/data.json";

function App() {
    const [pokemons, setPokemons] = useState(data);

    return <PokeList pokemons = { pokemons }
    />;
}

export default App;