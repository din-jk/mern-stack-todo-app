# MERN Todo Application

## Overview
This is a MERN stack (MongoDB, Express, React, Node.js) application for managing todos. It integrates Redux for state management on the frontend, allowing users to add, update, delete, and filter tasks. The application features a clean and intuitive user interface with functionalities such as pagination and task status filtering.

## Features
- Add new tasks
- Update task status (complete/incomplete)
- Delete tasks
- Filter tasks by status (All Tasks, In Progress, Completed)
- Pagination for task lists

## Installation

### Prerequisites
- Node.js
- MongoDB

### Backend Setup
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <repository_directory>
2. Install backend dependencies:
   ```bash
   cd server
   npm install
3. Create a .env file in the server directory with the following content:
   NODE_ENV=development
   PORT=5000
   MONGO_URI=your_mongo_db_uri

4. Start the backend server:
   ```bash
   npm run dev

### Frontend Setup
1. Install frontend dependencies:
   ```bash
   cd client
   npm install
2. Start the frontend development server:
   ```bash
   npm start

## API Routes

### Todos
- **GET** `/api/todos`: Get todos with pagination and status filtering.

  Query Parameters:
  - `page`: Page number (default: 1)
  - `pageSize`: Number of todos per page (default: 10)
  - `status`: Task status filter (`completed`, `in-progress`, or `all`)

- **POST** `/api/todos`: Create a new todo.

  Body Parameters:
  - `title`: Title of the todo (required)

- **PUT** `/api/todos/:id`: Update an existing todo.

  URL Parameters:
  - `id`: ID of the todo to update

  Body Parameters:
  - Any fields to update (e.g., `title`, `completed`)

- **DELETE** `/api/todos/:id`: Delete a todo.

  URL Parameters:
  - `id`: ID of the todo to delete

## Folder Structure

### Backend
- `config/db.js`: Database connection configuration
- `controller/todoController.js`: Todo CRUD operations logic
- `middleware/errorMiddleware.js`: Error handling middleware
- `models/Todo.js`: Mongoose schema for Todo
- `routes/todoRoutes.js`: Routes for todo operations
- `index.js`: Main server file

### Frontend
- `src/components/`: React components
- `src/redux/`: Redux slices and API configuration
- `src/App.js`: Main application component
- `src/index.js`: Entry point for the React application

## Running the Application

1. Ensure MongoDB is running and accessible.
2. Start the backend server:
   ```bash
   cd server
   npm run dev
3. Start the frontend server:
   ```bash
   cd client
   npm start
4. Open your browser and navigate to http://localhost:3000

## Dependencies

### Backend
- `express`
- `dotenv`
- `mongoose`
- `express-async-handler`
- `nodemon` (dev dependency)

### Frontend
- `react`
- `react-dom`
- `redux`
- `@reduxjs/toolkit`
- `react-redux`
- `tailwindcss`

## License

This project is licensed under the MIT License.


