
import { stringify } from "querystring";
import React from "react";
import { createContext } from "react"
export const SearchBarContext = createContext({
    handleSearch: Function,
    handleChange: Function,
    pokemon: String,
    setPokemon: Function,
    onSearchHandler: Function,
    busca: String,
});

export const SearchBarContextProvider: React.FC = ({ children }) => {
    const [pokemon, setPokemon] = React.useState<string>('');
    const [busca, setBusca] = React.useState<string>(null);

    const handleChange = (e: any) => {
        const value = e.target.value;
        const teste = String(value);
        setPokemon(teste)
        setBusca(teste);
    };

    const onSearchHandler = (busca) => {
        if (!busca) {
            return false
        }
        return true
    }



    const handleSearch = () => {
        console.log(pokemon)
        // onSearchHandler(pokemon);
        setBusca(pokemon);
        setPokemon('');
    };

    return (
        <SearchBarContext.Provider value={{ pokemon, setPokemon: setPokemon, handleChange: handleChange, handleSearch: handleSearch, onSearchHandler: onSearchHandler, busca }}>
            {children}
        </SearchBarContext.Provider>
    )
}
