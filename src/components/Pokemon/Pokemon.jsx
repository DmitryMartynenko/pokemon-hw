import s from "./Pokemon.module.css";
import {NavLink} from "react-router-dom";
import PokemonStatus from "../PokemonStatusBtn/PokemonStatus";
import React from "react";
import Provider from "react-redux/lib/components/Provider";
import store from "../redux/store";


const GetPokemonItem = ({id, name, isButton}) => {
    let path = '/pokemonList/' + id;

    return (
        <div className={s.cardWrapper}>
            <NavLink to={`/pokemonList/${id}`}>
                <div>
                    <NavLink to={`/pokemonList/`}>
                        {isButton && <button>
                            Back to list
                        </button>}
                    </NavLink>
                </div>
                <p>{name}</p>
                <img className={s.imgWrapper} src={`${process.env.PUBLIC_URL}/pokemons/${id}.png`}></img>
            </NavLink>


            <div className={s.id}>{`page${id}`} </div>
            <Provider store={store}>
                <PokemonStatus id={id}/>
            </Provider>


        </div>)
};
export default GetPokemonItem;
