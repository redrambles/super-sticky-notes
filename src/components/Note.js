export default function Note({ deleteNote, id, title, description, editNote }) {

	const handleChange = (e) => {
		const {value, name} = e.target;
		return editNote(id, name, value)
	}

	return (
		<li className='note'>
			<input
				name="title"
				className='note__title'
				type='text'
				placeholder='Title'
				value={title}
				onChange={handleChange}
			/>
			<textarea
				name="description"
				className='note__description'
				placeholder='Description...'
				value={description}
				onChange={handleChange}
			/>
			<span className='note__delete' onClick={() => deleteNote(id)}>
				X
			</span>
		</li>
	);
}
