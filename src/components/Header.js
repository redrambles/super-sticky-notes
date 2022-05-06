import React from "react";

export default function Header({ addNote, setSearchText }){
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
					onChange={(e) => setSearchText(e.target.value)}
				/>
			</aside>
		</div>
	);
}
