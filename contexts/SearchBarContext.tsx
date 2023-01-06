import React, { MouseEventHandler } from "react";
import { createContext } from "react";

interface IContextProps {
	handleSearch: MouseEventHandler<HTMLButtonElement>;
	handleChange: Function;
	pokemon: string;
	setPokemon: React.Dispatch<React.SetStateAction<any>>;
	busca: string;
	Clear: () => void;
	digitado: string;
}

export const SearchBarContext = createContext({} as IContextProps);

export const SearchBarContextProvider = ({ children }) => {
	const [pokemon, setPokemon] = React.useState(null);
	const [digitado, setDigitado] = React.useState(null);
	const [busca, setBusca] = React.useState(null);

	const handleChange = (value) => {
		const newValue = value.toLowerCase();
		setDigitado(value);
		setPokemon(newValue);
		setBusca(newValue);
	};

	const handleSearch = () => {
		setPokemon("");
		setDigitado("");
		setBusca(pokemon.toLowerCase());
	};

	const Clear = () => {
		setDigitado("");
		setPokemon("");
		setBusca("");
	};

	return (
		<SearchBarContext.Provider
			value={{
				digitado,
				Clear: Clear,
				pokemon,
				setPokemon: setPokemon,
				handleChange: handleChange,
				handleSearch: handleSearch,
				busca,
			}}
		>
			{children}
		</SearchBarContext.Provider>
	);
};
