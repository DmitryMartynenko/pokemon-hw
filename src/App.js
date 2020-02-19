import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter, Route} from "react-router-dom";
import PokemonList from "./components/PokemonsList/PokemonList";
import Game from "./components/Сaught/CaughtPokemons";
import GetPokemonItem from "./components/Pokemon/Pokemon";


const App = (props) => {


    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div class='app-wrapper-content'>
                    <Route path='/pokemonList' component={PokemonList} exact/>
                    <Route path='/caught' component={Game}/>
                    <Route path='/pokemonList/:id'
                           render={({match}) => {
                               const {id} = match.params;
                               return (<React.Fragment>

                                   <GetPokemonItem id={id} name={PokemonList.бname} isButton={true}/>

                               </React.Fragment>)
                           }}/>


                </div>
            </div>
        </BrowserRouter>)
};

export default App;
