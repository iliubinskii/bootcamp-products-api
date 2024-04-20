import UserModel from "./model.js";
import logger from "../logger.js";
import  createMongodbService  from "../crud/services/mongodb.js";

const userService = createMongodbService(UserModel, logger);

export default userService;