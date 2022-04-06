import React from "react";

export default function Note({ note, editNote, deleteNote }) {
	return (
		<li className='note'>
			<input
				className='note__title'
				type='text'
				placeholder='Title'
				value={note.title}
				onChange={(e) => editNote(note.id, "title", e.target.value)}
			/>
			<textarea
				className='note__description'
				placeholder='Description...'
				value={note.description}
				onChange={(e) => editNote(note.id, "description", e.target.value)}
			/>
			<span className='note__delete' onClick={() => deleteNote(note.id)}>
				X
			</span>
		</li>
	);
}
