import React from "react";
import { useNotesContext } from '../context';

export default function Header(){
	const {addNote, updateSearchText} = useNotesContext()
	return (
		<div>
			<h1 className='app-header__title'>Super Sticky Notes</h1>

			<aside className='app-header__controls'>
				<button className='add-new' onClick={addNote}>
					+ New Note
				</button>
				<input
					type='text'
					className='search'
					placeholder='Type here to search...'
					onChange={(e) => updateSearchText(e.target.value)}
				/>
			</aside>
		</div>
	);
}
