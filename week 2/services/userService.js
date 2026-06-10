const { v4: uuidv4 } = require('uuid');
const userModel = require('../models/userModel');

function getAllUsers() {
  return userModel.users;
}

function getUserById(id) {
  const user = userModel.users.find((item) => item.id === id);
  if (!user) {
    const error = new Error('User not found');
    error.statusCode = 404;
    throw error;
  }
  return user;
}

function createUser({ name, email, age }) {
  const newUser = {
    id: uuidv4(),
    name: name.trim(),
    email: email.toLowerCase().trim(),
    age
  };
  userModel.users.push(newUser);
  return newUser;
}

function updateUser(id, { name, email, age }) {
  const existingIndex = userModel.users.findIndex((item) => item.id === id);

  if (existingIndex === -1) {
    const error = new Error('User not found');
    error.statusCode = 404;
    throw error;
  }

  const updatedUser = {
    ...userModel.users[existingIndex],
    name: name.trim(),
    email: email.toLowerCase().trim(),
    age
  };

  userModel.users[existingIndex] = updatedUser;
  return updatedUser;
}

function deleteUser(id) {
  const existingIndex = userModel.users.findIndex((item) => item.id === id);

  if (existingIndex === -1) {
    const error = new Error('User not found');
    error.statusCode = 404;
    throw error;
  }

  userModel.users.splice(existingIndex, 1);
}

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
