import { CATCH_POKEMON } from "../actionTypes";

export function catchPokemon(name) {
  return {
    type: CATCH_POKEMON,
    name
  };
}
