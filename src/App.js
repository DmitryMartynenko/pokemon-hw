import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import PokemonList from "./components/Navbar/Pokedeks/PokemonsList/PokemonList";
import Game from "./components/Navbar/Сaught/CaughtPokemons";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Route path='/pokedeks' component={PokemonList}/>
                    <Route path='/caught' component={Game}/>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;
