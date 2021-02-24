import '../stylesheets/pokemon.css';

function Pokemon(props){
    const fichasPokemon = props.data.types.map((types)=> {return (
        <li key={props.data.id} pokeType="types" class="pokeList">
            {types}</li>
    )}
    )
    return(
        <article class="PokeCard">
        <img src={props.data.url}/>
       <h2 class="pokename">{props.data.name}</h2>

       <ul>
       {fichasPokemon}
        </ul>
    
        </article>
    )
}


export default Pokemon;