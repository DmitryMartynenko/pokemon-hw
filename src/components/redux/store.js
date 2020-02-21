import { createStore } from "redux";
import pokemons from "./reducer";





const store = createStore(pokemons);


export default store;
