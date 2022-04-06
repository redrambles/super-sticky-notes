import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Note from "./components/Note";
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
	const [notes, setNotes] = useLocalStorage("notes", [
		{
			id: 0,
			title: "eat",
			description: "reese peanut butter cups",
			doesMatchSearch: true,
		},
		{
			id: 1,
			title: "sleep",
			description: "eight hours",
			doesMatchSearch: true,
		},
		{
			id: 2,
			title: "code",
			description: "build an awesome ui",
			doesMatchSearch: true,
		},
	]);

	const [searchText, setSearchText] = useState("");

	useEffect(() => {
		const updatedNotes = notes.map((note) => {
			if (note.title.toLowerCase().includes(searchText) || note.description.toLowerCase().includes(searchText)) {
				return { ...note, doesMatchSearch: true };
			} else {
				return { ...note, doesMatchSearch: false };
			}
		});
		setNotes(updatedNotes);
	}, [searchText]);

	useEffect(() => {
		localStorage.setItem("notes", JSON.stringify(notes));
	}, [notes]);

	const addNote = () => {
		let newNote = {
			id: Date.now(),
			title: "",
			description: "",
			doesMatchSearch: true,
		};
		setNotes([newNote, ...notes]);
	};

	const editNote = (noteId, field, text) => {
		const newNotes = notes.map((note) => {
			if (note.id !== noteId) {
				return note;
			} else {
				if (field === "title") {
					return { ...note, title: text };
				} else if (field === "description") {
					return { ...note, description: text };
				} else {
					console.log("Something weird is going down in the note editing feature");
					return note;
				}
			}
		});
		setNotes(newNotes);
	};

	const deleteNote = (deletedNoteId) => {
		const updatedNotes = notes.filter((note) => note.id !== deletedNoteId);
		setNotes(updatedNotes);
	};

	return (
		<div className='App'>
			<Header newNote={addNote} setSearchText={setSearchText} />
			<ul className='notes-list'>
				{notes
					.filter((note) => note.doesMatchSearch)
					.map((note) => (
						<Note key={note.id} note={note} editNote={editNote} deleteNote={deleteNote} />
					))}
			</ul>
		</div>
	);
}

export default App;
