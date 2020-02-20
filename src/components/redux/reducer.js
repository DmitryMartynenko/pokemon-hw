
// нужно будет сделать акшен для загрузки сюда из сервера
import {CATCH_POKEMON} from "./actionTypes";

const initialState = {
    caughtPokemons: [1,2,3],
};

function pokemonsReducer(state = initialState, action) {

    switch (action.type) {
        case CATCH_POKEMON: {
            console.log('STATE:',state,'ACTION:',action);
            console.log('STATE:',state,'ACTION:',action);

            return {
                ...state,
                caughtPokemons: [...state.caughtPokemons, action.id]
            };
        }
        default:
            return state;


    }
}

export default pokemonsReducer;
