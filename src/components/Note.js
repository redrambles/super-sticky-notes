export default function Note({ deleteNote, note, editNote }) {
	const {id, title, description} = note

	return (
		<li className='note'>
			<input
				className='note__title'
				type='text'
				placeholder='Title'
				value={title}
				onChange={(e) => editNote(id, "title", e.target.value )}
			/>
			<textarea
				className='note__description'
				placeholder='Description...'
				value={description}
				onChange={(e) => editNote(id, "description", e.target.value )}
			/>
			<span className='note__delete' onClick={() => deleteNote(id)}>
				X
			</span>
		</li>
	);
}
