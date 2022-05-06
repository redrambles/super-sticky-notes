import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const NotesContext = React.createContext();

const initialState = {
	notes: JSON.parse(window.localStorage.getItem("notes")) || [],
	searchText: "",
};

export const NotesProvider = ({ children }) => {
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
		<NotesContext.Provider
			value={{
				...state,
				addNote,
				editNote,
				deleteNote,
				updateSearchText,
			}}
		>
			{children}
		</NotesContext.Provider>
	);
};

export const useNotesContext = () => {
	return useContext(NotesContext);
};
