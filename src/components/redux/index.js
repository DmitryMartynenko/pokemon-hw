import pokemonsReducer from "./reducer";
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    catchPokemon:pokemonsReducer
});

export default rootReducer
