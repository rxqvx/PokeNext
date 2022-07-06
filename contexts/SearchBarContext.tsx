
import { stringify } from "querystring";
import React from "react";
import { createContext } from "react"
export const SearchBarContext = createContext({
    handleSearch: Function,
    handleChange: Function,
    pokemon: String,
    setPokemon: Function,
    busca: String,
});

export const SearchBarContextProvider: React.FC = ({ children }) => {
    const [pokemon, setPokemon] = React.useState<string>('');
    const [busca, setBusca] = React.useState<string>(null);

    const handleChange = (value: StringConstructor) => {
        const teste = String(value);
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
