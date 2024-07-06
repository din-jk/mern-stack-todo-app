import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetTodosQuery } from '../redux/apiSlice';
import TodoItem from './TodoItem';
import Pagination from './Pagination';
import TabBar from './TabBar';

function TodoList() {
  const [activeTab, setActiveTab] = useState('All Tasks');
  const { currentPage, pageSize } = useSelector((state) => state.todos);
  const { data, isLoading, isError } = useGetTodosQuery({ 
    page: currentPage, 
    pageSize, 
    status: activeTab === 'All Tasks' ? '' : activeTab === 'Completed' ? 'completed' : 'in-progress' 
  });
  if (isLoading) return <div className="text-center text-gray-600 text-xl">Loading your tasks...</div>;
  if (isError) return <div className="text-center text-red-500 text-xl">Oops! Something went wrong.</div>;

  const filteredTodos = data.todos.filter((todo) => {
    if (activeTab === 'All Tasks') return true;
    if (activeTab === 'In Progress') return !todo.completed;
    if (activeTab === 'Completed') return todo.completed;
    else return false;
  });

  return (
    <div>
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="space-y-4">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} showStatus={activeTab === 'All Tasks'} />
        ))}
      </div>
      <Pagination totalPages={data.totalPages} />
    </div>
  );
}

export default TodoList;