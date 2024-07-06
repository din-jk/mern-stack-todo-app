import React from "react";
import {
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} from "../redux/apiSlice";

function TodoItem({ todo, showStatus }) {
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();

  const handleToggle = () => {
    updateTodo({ id: todo._id, completed: !todo.completed });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      deleteTodo(todo._id);
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-4 flex items-center justify-between mb-3">
      <div className="flex items-center flex-grow">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggle}
          className="h-5 w-5 text-blue-600 rounded border-gray-600 bg-gray-700 focus:ring-blue-500"
        />
        <span
          className={`ml-3 ${
            todo.completed ? "line-through text-gray-500" : "text-gray-200"
          } font-normal`}
        >
          {todo.title}
        </span>
      </div>
      {showStatus && (
        <span
          className={`px-2 py-1 rounded-full text-xs font-semibold ${
            todo.completed
              ? "bg-green-900 text-green-300"
              : "bg-yellow-900 text-yellow-300"
          }`}
        >
          {todo.completed ? "Completed" : "In Progress"}
        </span>
      )}
      <button
        onClick={handleDelete}
        className="ml-4 text-red-400 hover:text-red-300 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
}

export default TodoItem;
