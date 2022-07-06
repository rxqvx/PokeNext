
import { stringify } from "querystring";
import React, { MouseEventHandler } from "react";
import { createContext } from "react"
export const SearchBarContext = createContext({
    handleSearch: Function,
    handleChange: Function,
    pokemon: String,
    setPokemon: Function,
    busca: String,
});

export const SearchBarContextProvider = ({ children }) => {
    const [pokemon, setPokemon] = React.useState(null);
    const [busca, setBusca] = React.useState(null);

    const handleChange = (value) => {
        console.log("tipo do pokemon: ", typeof (pokemon));
        const teste = value;
        setPokemon(teste)
        setBusca(teste);
    };

    const handleSearch = () => {
        // console.log(pokemon)
        setBusca(pokemon);
        setPokemon('');
    };

    return (
        <SearchBarContext.Provider value={{ pokemon, setPokemon: setPokemon, handleChange: handleChange, handleSearch: handleSearch, busca }}>
            {children}
        </SearchBarContext.Provider>
    )
}
