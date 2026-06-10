const userService = require('../services/userService');
const { buildSuccessResponse } = require('../utils/responseHelper');

exports.getAllUsers = async (req, res, next) => {
  try {
    const users = userService.getAllUsers();
    res.status(200).json(buildSuccessResponse('Users retrieved successfully', users));
  } catch (error) {
    next(error);
  }
};

exports.getUserById = async (req, res, next) => {
  try {
    const user = userService.getUserById(req.params.id);
    res.status(200).json(buildSuccessResponse('User retrieved successfully', user));
  } catch (error) {
    next(error);
  }
};

exports.createUser = async (req, res, next) => {
  try {
    const user = userService.createUser(req.body);
    res.status(201).json(buildSuccessResponse('User created successfully', user));
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const user = userService.updateUser(req.params.id, req.body);
    res.status(200).json(buildSuccessResponse('User updated successfully', user));
  } catch (error) {
    next(error);
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    userService.deleteUser(req.params.id);
    res.status(200).json({
      success: true,
      message: 'User deleted successfully',
      data: null
    });
  } catch (error) {
    next(error);
  }
};
