import React from "react"
import './App.css';
import {  ChakraProvider,  Input, theme } from "@chakra-ui/react"
import ColorModeSwitcher from './components/ColorModeSwitcher'
import PokemonCards from "./components/PokemonCard";




function App() {
  const [pokemon, setPokemon] = React.useState([]);

React.useEffect(() => {
  fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((resp) => resp.json())
    .then((data) => setPokemon(data));
}, []);

console.log(setPokemon)
  return (
   <>
    <ChakraProvider theme={theme}>
    <ColorModeSwitcher/>
   <h1>Poke Dex App (Gotta'a find em all!)</h1>

   <Input variant="filled" placeholder="Search for Pokemon" />

   <PokemonCards/>
    </ChakraProvider>
   </>
  );
}

export default App;
