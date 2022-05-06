import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

const initialState = {
	notes: JSON.parse(window.localStorage.getItem("notes")) || [],
	searchText: "",
};

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		window.localStorage.setItem("notes", JSON.stringify(state.notes));
	}, [state.notes]);

	const addNote = () => {
		dispatch({ type: "ADD_NOTE" });
	};

	const editNote = (id, field, text) => {
		dispatch({ type: "EDIT_NOTE", payload: { id, field, text } });
	};

	const deleteNote = (id) => {
		dispatch({ type: "DELETE_NOTE", payload: id });
	};

	const updateSearchText = (text) => {
		dispatch({ type: "UPDATE_SEARCH_TEXT", payload: text });
	};

	return (
		<AppContext.Provider
			value={{
				...state,
				addNote,
				editNote,
				deleteNote,
				updateSearchText,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useAppContext = () => {
	return useContext(AppContext);
};
