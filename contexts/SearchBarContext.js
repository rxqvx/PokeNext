
import React from "react";
import { createContext } from "react"
export const SearchBarContext = createContext({
    handleSearch: Function,
    handleChange: Function,
    pokemon: String,
    setPokemon: Function,
    busca: String,
    Clear: Function,
    digitado: String,
});

export const SearchBarContextProvider = ({ children }) => {
    const [pokemon, setPokemon] = React.useState(null);
    const [digitado, setDigitado] = React.useState(null);
    const [busca, setBusca] = React.useState(null);

    const handleChange = (value) => {
        // console.log("tipo do pokemon: ", typeof (pokemon));
        const newValue = value.toLowerCase();
        setDigitado(value);
        setPokemon(newValue)
        setBusca(newValue);
    };

    const handleSearch = () => {
        setPokemon('');
        setDigitado('');
        setBusca(pokemon.toLowerCase());
    };

    const Clear = () => {
        setDigitado('');
        setPokemon('');
        setBusca('');
    }

    return (
        <SearchBarContext.Provider value={{ digitado, Clear: Clear, pokemon, setPokemon: setPokemon, handleChange: handleChange, handleSearch: handleSearch, busca }}>
            {children}
        </SearchBarContext.Provider>
    )
}
