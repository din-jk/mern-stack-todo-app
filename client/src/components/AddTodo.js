import React, { useState } from 'react';
import { useAddTodoMutation } from '../redux/apiSlice';

function AddTodo() {
  const [title, setTitle] = useState('');
  const [addTodo] = useAddTodoMutation();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo({ title, completed: false });
      setTitle('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8 mt-2">
      <div className="flex items-center border-b-2 border-gray-700 py-2">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Add a new task"
          className="appearance-none bg-transparent border-none w-full text-gray-200 mr-3 py-1 px-2 leading-tight focus:outline-none font-normal"
        />
        <button
          type="submit"
          className="flex-shrink-0 bg-blue-500 hover:bg-blue-600 border-blue-500 hover:border-blue-600 text-sm border-4 text-white py-1 px-2 rounded font-medium"
        >
          Add Task
        </button>
      </div>
    </form>
  );
}

export default AddTodo;