import UserModel from "./model.js";
import logger from "../logger.js";

export const getUsers = async () => {
  try {
    return await UserModel.find({});
  } catch (error) {
    logger.error(error);
    return null;
  }
};

export const getUserById = async (id) => {
  try {
    return await UserModel.findById(id);
  } catch (error) {
    logger.error(error);
    return null;
  }
};

export const createUser = async (user) => {
  try {
    const newUser = new UserModel(user);
    return await newUser.save();
  } catch (error) {
    logger.error(error);
    return null;
  }
};

export default {
  getUsers,
  getUserById,
  createUser,
};
