import React from "react";
import {catchPokemon} from "../redux/actions";
import connect from "react-redux/lib/connect/connect";
import s from './PokemonStatus.module.css'
import Provider from "react-redux/lib/components/Provider";
import store from "../redux/store";

// {/*disabled={props.caughtPokemons.some(id => id === 3)*/}
const PokemonStatus = (props) => {


    const {catchPokemon, id} = props;
    // const pokemonCaught = catchPokemon.some(pokeId => pokeId === id)
    // const {id} = this.props === const id = this.props.id;

    return (
        <div>

                <button className={s.button}
                    // disabled={props.caughtPokemons.some(id => id === 1)}
                    disabled={props.caughtPokemons.some(id => id === props.id)}
                    onClick={event => catchPokemon(props.id)}> catch him
                </button>

        </div>
    )
};

const mapStateToProps = state => ({
    caughtPokemons: state.caughtPokemons
});

const mapDispatchToProps = dispatch => ({
    catchPokemon: id => dispatch(catchPokemon(id))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PokemonStatus);

