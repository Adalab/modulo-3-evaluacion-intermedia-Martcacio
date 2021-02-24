import '../stylesheets/pokemon.css';

function Pokemon(props){
    const fichasPokemon = props.data.types.map((types, i)=> {
  
        return (
        <li key={i} pokeType="types" class="pokeListTypes">
            {types}</li>
    )}
    )
    return(
        <article class="PokeCard">
            <p class="pokeId">{<img class="pokeball"src="https://www.dlf.pt/dfpng/middlepng/597-5970982_pokeball-pixel-png-transparent-png.png"></img>} {"00" +props.data.id}</p>
        <img src={props.data.url}/>
       <h2 class="pokename">{props.data.name}</h2>

       <ul class="poketype">
       {fichasPokemon}
        </ul>
    
        </article>
    )
}


export default Pokemon;