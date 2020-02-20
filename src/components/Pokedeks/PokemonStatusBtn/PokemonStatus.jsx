import React from "react";
import {catchPokemon} from "../../redux/actions";
import connect from "react-redux/lib/connect/connect";


const PokemonStatus = (props) => {
    const { catchPokemon, caughtPokemons } = props;
    return (
        <div>
            <button onClick = {event => catchPokemon(props.id)}> catch him </button>
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
