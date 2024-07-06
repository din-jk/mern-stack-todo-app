const asyncHandler = require('express-async-handler');
const Todo = require('../models/Todo');

// @desc    Get todos with pagination
// @route   GET /api/todos
// @access  Public
const getTodos = asyncHandler(async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 10;
  const status = req.query.status;

  let query = {};
  if (status === 'completed') {
    query.completed = true;
  } else if (status === 'in-progress') {
    query.completed = false;
  }

  const count = await Todo.countDocuments(query);
  const todos = await Todo.find(query)
    .limit(pageSize)
    .skip((page - 1) * pageSize)
    .sort({ createdAt: -1 });

  res.json({
    todos,
    currentPage: page,
    totalPages: Math.ceil(count / pageSize),
    totalTodos: count,
  });
});

// @desc    Create a todo
// @route   POST /api/todos
// @access  Public
const createTodo = asyncHandler(async (req, res) => {
  const { title } = req.body;

  if (!title) {
    res.status(400);
    throw new Error('Please add a title');
  }

  const todo = await Todo.create({
    title,
    completed: false,
  });

  res.status(201).json(todo);
});

// @desc    Update a todo
// @route   PUT /api/todos/:id
// @access  Public
const updateTodo = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(404);
    throw new Error('Todo not found');
  }

  const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.json(updatedTodo);
});

// @desc    Delete a todo
// @route   DELETE /api/todos/:id
// @access  Public
const deleteTodo = asyncHandler(async (req, res) =>  {
  const todo = await Todo.findById(req.params.id);

  if (!todo) {
    res.status(404);
    throw new Error('Todo not found');
  }

  await Todo.findByIdAndDelete(req.params.id);

  res.json({ id: req.params.id });
});

module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
};