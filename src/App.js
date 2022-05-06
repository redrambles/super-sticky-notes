import Header from './components/Header'
import Note from './components/Note';
import { useAppContext } from './context';
import './App.css'


function App() {

	const {notes, searchText, addNote, editNote, deleteNote} = useAppContext();

	return (
		<div className='App'>
			<Header addNote={addNote} />
			<ul className="notes-list">
				{notes.filter(note => (
					note.title.toLowerCase().includes(searchText.toLowerCase()) ||
					note.description.toLowerCase().includes(searchText.toLowerCase())
				)).map(note => (
					<Note
						key={note.id}
						note={note}
						deleteNote={deleteNote}
						editNote={editNote}
					/>
				))}
			</ul>
		</div>
	);
}

export default App;


