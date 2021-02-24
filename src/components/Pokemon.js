import '../stylesheets/pokemon.css';
import React, { useState } from 'react';

function Pokemon(props){
    const [shake, setshake] = useState("shake-slow");
    const handleShake = () => {
      if (shake === "" ) {
        setshake("shake-slow");
      } else {
        setshake("");
      }
    };

    /* const typeColor=()=>{
      if (poketype === "fire"){
        className="fire";
      }
    elseif(poketype === "bug"){
      className="bug";
    }
    elseif(poketype === "water"){
      className="water";
    }
    elseif(poketype === "poison"){
      className="poison";
    }
    else{
      className="grass";
    }
  } */
    const fichasPokemon = props.pokemons.types.map((type, index)=> {
  
        return (
         
        <li key={index} poketype="types" className="pokeListTypes fire">
            {type}</li>
    )}
    )
    return(
        <article className="PokeCard shake-hard" type="button" onClick={handleShake}>
            <p className="pokeId">{<img className="pokeball"src="https://www.dlf.pt/dfpng/middlepng/597-5970982_pokeball-pixel-png-transparent-png.png"></img>} {"00" +props.pokemons.id}</p>
        <img src={props.pokemons.url} alt={props.pokemons.name}/>
       <h2 className="pokename">{props.pokemons.name}</h2>

       <ul className="poketype">
       {fichasPokemon}
        </ul>
    
        </article>
    )
    }


export default Pokemon;