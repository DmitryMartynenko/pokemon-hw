import React from "react";
import s from './Pokedeks.module.css'
import {NavLink} from "react-router-dom";

class Pokedeks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {pokemonsData: []};
    }

    componentDidMount() {

        fetch('http://localhost:3000/pokemons?_limit=100')
            .then(data => data.json())
            .then(data => this.setState({pokemonsData: data}));
    }

    getPokemonItem(id, name) {
        let path = '/pokedeks/' + id;
        return (
            <div className={s.cardWrapper}>
                <NavLink to={`/pokedeks/${id}`}> {name} </NavLink>
                <div className={s.id}>{`page${id}`} </div>
            </div>)
    }

    render() {
        const {pokemonsData} = this.state;
        const pokemonNodes = pokemonsData.map(({id, name}) => this.getPokemonItem(id, name));
        return (
            <div className>
                <div className>
                    {pokemonNodes}
                </div>
            </div>
        )
    }
}

export default Pokedeks;