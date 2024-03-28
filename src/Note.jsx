// Note.jsx
import React from 'react';

export default function Note({ index, content, onDelete }) {
  return (
    <div>
      <p>{content}</p>
      <button onClick={() => onDelete(index)}>Delete</button>
    </div>
  );
}