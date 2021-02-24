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

    const fichasPokemon = props.pokemons.types.map((type, index)=> {

    let typeColor="";
    if 
      (type.includes ("bug")){
        typeColor="bug";}
    else if(type.includes ("fire")){
      typeColor="fire"; 
    }
    else if(type.includes ("flying")){
      typeColor="flying";
    }
    else if(type.includes ("water")){
      typeColor="water";
    }
    else if(type.includes ("poison")){
      typeColor="poison";
    }
    else{
      typeColor="grass";
  } 

  
    
        return (
         
        <li key={index} poketype="types" className={`pokeListTypes ${typeColor}`}>
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