import logger from '../logger.js';
import userService from './service.js'; // need to create service

export const getUsers = async (req, res, next) => {
  try {
    const users = await userService.getUsers();
    return res.json(users);
  } catch (err) {
    next(err);
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }
  return res.json(user);
};

export const createUser = async (req, res) => {
  const user = req.body;
  const newUser = await userService.createUser(user);
  logger.info(`User created: ${JSON.stringify(newUser)} req: ${req.uuid}`);
  return res.status(201).json(newUser);
};

export const updateUser = async (req, res) => {
  const user = req.body;
  const id = req.params.id;
  const updatedUser = await userService.updateUser(id, user);
  return res.status(201).json(updatedUser);
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  const deleted = await userService.deleteUser(id);
  return res.status(204).end();
};

export default {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
