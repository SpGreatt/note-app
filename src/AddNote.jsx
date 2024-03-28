// AddNote.jsx
import React, { useState } from 'react';

export default function AddNote({ onAddNote }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddNote = () => {
    onAddNote(inputValue);
    setInputValue('');
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
}