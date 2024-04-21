import CategoryModel from "./model.js";
import logger from "../logger.js";
import createMongodbService from "../crud/services/mongodb.js";

const categoryService = createMongodbService(CategoryModel, logger);

export default categoryService;
