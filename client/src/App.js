import React from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Navbar />
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 rounded-lg shadow-xl overflow-hidden border border-gray-800">
            <div className="p-6">
              <AddTodo />
              <TodoList />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;