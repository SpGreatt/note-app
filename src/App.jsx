// App.jsx
import React, { useState } from 'react';
import Note from './Note';
import AddNote from './AddNote';
import './App.css';

export default function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <h1>Sammy's Note Taking App</h1>
      <AddNote onAddNote={addNote} />
      {notes.map((note, index) => (
        <Note key={index} index={index} content={note} onDelete={deleteNote} />
      ))}
    </div>
  );
}