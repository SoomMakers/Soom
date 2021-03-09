import React from 'react';

export default function Input({ value, onChange, onClick }) {
  return (
    <p>
      <input
        type="text"
        placeholder="please write your task"
        value={value}
        onChange={onChange}
      />
      <button type="button" onClick={onClick}>
        Add
      </button>
    </p>
  );
}
