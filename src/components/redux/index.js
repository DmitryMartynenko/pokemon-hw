import pokemonsReducer from "./reducer";
import {combineReducers} from "redux";


const rootReducer = combineReducers({
    catchPokemom:pokemonsReducer
});

export default rootReducer
