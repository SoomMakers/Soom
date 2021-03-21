import React from 'react';

import '../../css/styles.css';

export default function Input({ value, onChange, onClick }) {
  return (
    <p>
      <input
        type="text"
        className="todo-main__input"
        placeholder="please write your task"
        value={value}
        onChange={onChange}
      />
      <button
        className="todo-main__submit"
        type="button"
        onClick={onClick}
      >
        Add
      </button>
    </p>
  );
}
