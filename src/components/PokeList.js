import Pokemon from './Pokemon.js';
import '../stylesheets/pokelist.css';

function PokeList(props){
    const fichas = props.pokemons.map((ficha)=> {return (
        <li key={ficha.id} className="pokeList">
            <Pokemon pokemons={ficha}/></li>
    )}
    )
    return(
        <>
        <h1 className="title">Mi Pokedex</h1>
        <ul className="cards">
        {fichas}
        </ul>
    
       </>
    )
}

export default PokeList;