import Pokemon from './Pokemon.js';
import '../stylesheets/pokelist.css';

function PokeList(props){
    console.log(props.data);
    const fichas = props.data.map((ficha)=> {return (
        <li id={props.id} class="pokeList">
            <Pokemon data={ficha}/></li>
    )}
    )
    return(
        <>
        <h1 class="title">Mi PokeLista</h1>
        <ul class="cards">
        {fichas}
        </ul>
    
       </>
    )
}

export default PokeList;