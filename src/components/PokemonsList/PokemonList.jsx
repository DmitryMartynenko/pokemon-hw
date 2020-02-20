import React from "react";
import s from './PokemonList.module.css'

import {NavLink} from "react-router-dom";
import PokemonStatus from "../Pokedeks/PokemonStatusBtn/PokemonStatus";
import GetPokemonItem from "../Pokemon/Pokemon";

class PokemonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemonsData: [],
            caughtPokemons: {},
            paginationCounter: 5
        };
    }

    upload() {
        fetch(`http://localhost:3000/pokemons?_limit=${this.state.paginationCounter}`)
            .then(data => data.json())
            .then(data => this.setState({pokemonsData: data}));
    }

    componentDidMount() {
        this.upload()
    }

    pagination() {
        let counter = this.state.paginationCounter + 5;
        // this.state.paginationCounter = counter;
        this.setState({paginationCounter: counter});


        console.log('counter',counter);
        console.log(this.state)
    }


    render() {
        const pokemonsData = this.state.pokemonsData;
        const elements = pokemonsData.map((item) => {
            return <GetPokemonItem {...item} key={item.id}/>
        });
        {/*const pokemonNodes = pokemonsData.map(({id, name}) => <getPokemonItem props={pokemonsData}/>(id, name));*/
        }
        return (
            <div>
                <div>
                    <div> {elements} </div>
                    {/*{pokemonNodes}*/}
                    <button className={s.loadButton} onClick={() => {
                        this.pagination();
                        this.upload();
                    }}> Load More
                    </button>
                </div>
            </div>
        )
    }
}

export default PokemonList;
