import {CATCH_POKEMON} from "../actionTypes";
// нужно будет сделать акшен для загрузки сюда из сервера
const initialState = {
    pokemons: {
        pokemon1: {
            catched: false
        },
        pokemon2: {
            catched: false
        },
      pokemon3: {
            catched: false
        }
    }
};

function pokemonsReducer(state = initialState, action) {
    console.log(state, action);
    switch (action.type) {
        case CATCH_POKEMON: {
            const updatedPockemon = state.pokemons[action.name];
            updatedPockemon.catched = true;
            return {
                ...state,
                pokemons: {...state.pokemons, [action.name]: updatedPockemon}
            };
        }
        default:
            return state;
    }
}

export default pokemonsReducer;
