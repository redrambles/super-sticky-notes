const reducer = (state, action) => {
	switch (action.type) {
		case "UPDATE_SEARCH_TEXT":
			return { ...state, searchText: action.payload };

		case "DELETE_NOTE":
			const updatedNotes = state.notes.filter((note) => note.id !== action.payload);
			return { ...state, notes: updatedNotes };

		case "ADD_NOTE":
			const newNote = {
				id: Date.now(),
				title: "",
				description: "",
			};
			return { ...state, notes: [newNote, ...state.notes] };

		case "EDIT_NOTE":
			const { id, field, text } = action.payload;
			const editedNotes = state.notes.map((note) => {
				if (note.id !== id) {
					return note;
				} else {
					if (field === "title") {
						return { ...note, title: text };
					} else {
						return { ...note, description: text };
					}
				}
			});
			return { ...state, notes: editedNotes };

		default:
			throw new Error();
	}
};

export default reducer;
