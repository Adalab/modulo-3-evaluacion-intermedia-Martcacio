import Pokemon from './Pokemon.js';
import '../stylesheets/pokelist.css';

function PokeList(props){
    const fichas = props.data.map((ficha)=> {return (
        <li key={props.id} class="pokeList">
            <Pokemon data={ficha}/></li>
    )}
    )
    return(
        <>
        <h1 class="title">Mi Pokedex</h1>
        <ul class="cards">
        {fichas}
        </ul>
    
       </>
    )
}

export default PokeList;