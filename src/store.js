import React, { createContext, useState, useContext } from 'react';

const initialState = {
  count: 0,
  text: 'hello',
};



//Fetch Data
const [pokemon, setPokemon] = React.useState([]);

React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((resp) => resp.json())
      .then((data) => setPokemon(data));
  }, []);
console.log(data)

const useMyState = () => useState(initialState);

const MyContext = createContext(null);

export const useSharedState = () => {
  const value = useContext(MyContext);
  if (value === null) throw new Error('Please add SharedStateProvider');
  return value;
};

export const SharedStateProvider = ({ children }) => (
  <MyContext.Provider value={useMyState()}>{children}</MyContext.Provider>
);