import React from "react";


const PokemonStatus = (props) => {
    const { catchPokemon, pokemons } = props;
    return (
        <div>
            <button> catch him </button>
            {/*<button onClick={addPockemon}>Add post</button>*/}
        </div>

    )
};
export default PokemonStatus;