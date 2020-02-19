import s from "../PokemonsList/PokemonList.module.css";
import {NavLink} from "react-router-dom";
import PokemonStatus from "../Pokedeks/PokemonStatusBtn/PokemonStatus";
import React from "react";
import PokemonList from "../PokemonsList/PokemonList";


const GetPokemonItem = ({id, name, isButton}) => {
    let path = '/pokemonList/' + id;

    return (
        <div className={s.cardWrapper}>
            <NavLink to={`/pokemonList/${id}`}>
                <div>
                    <NavLink to={`/pokemonList/`}>
                    {isButton && <button>
                        Back to list
                    </button>}  </NavLink>
                </div>
                <p>{name}</p>
                <img className={s.imgWrapper} src={`${process.env.PUBLIC_URL}/pokemons/${id}.png`}></img>
            </NavLink>
            <div className={s.id}>{`page${id}`} </div>
            <PokemonStatus/>
        </div>)
}
export default GetPokemonItem;
