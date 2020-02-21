import {CATCH_POKEMON} from "./actionTypes";
import connect from "react-redux/lib/connect/connect";

const initialState = {
    caughtPokemons: [],
};

function pokemonsReducer(state = initialState, action) {

        switch (action.type) {
        case CATCH_POKEMON: {
            // console.log('STATE:',state,'ACTION:',action);
            // console.log('STATE:',state,'ACTION:',action);
            console.log(action.id);

            return {
                ...state,
                caughtPokemons: [...state.caughtPokemons, action.id]
            };
        }
        default:
            return state;
    }
}

const mapStateToProps = state => ({
    caughtPokemons: state.caughtPokemons
});

// export default connect(
//        mapStateToProps,
// )(pokemonsReducer);
export default pokemonsReducer
