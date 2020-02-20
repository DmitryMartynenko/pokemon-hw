import React from "react";



import connect from "react-redux/lib/connect/connect";
import {catchPokemon} from "./actions";

const Game = props => {
    const { catchPokemon, pokemons } = props;
    return Object.keys(pokemons).map(name => (
        <div>
            <p>{`${name} ${pokemons[name].catched ? "catched" : "catch it"}`}</p>
            <button onClick={event => catchPokemon(name)}>catch</button>
        </div>
    ));
};

const mapStateToProps = state => ({
    pokemons: state.pokemons
});

const mapDispatchToProps = dispatch => ({
    catchPokemon: name => dispatch(catchPokemon(name))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Game);
