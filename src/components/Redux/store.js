import { createStore } from "redux";
import pokemonsReducer from "./pokemons/reducer";

const store = createStore(pokemonsReducer);

export default store;
