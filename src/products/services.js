import ProductModel from './model.js';
import logger from '../logger.js';

class ProductService {
  createProduct = async (data) => {
    try {
      const newProduct = new ProductModel(data);
      return await newProduct.save();
    } catch (error) {
      logger.error(error);
      return null;
    }
  };

  getAllProducts = async () => {
    try {
      return await ProductModel.find({});
    } catch (error) {
      logger.error(error);
      return null;
    }
  };

  getOne = async (id) => {
    try {
      return await ProductModel.findById(id);
    } catch (error) {
      logger.error(error);
      return null;
    }
  };

  editProduct = async (dataToUpdate) => {
    try {
      return await ProductModel.findByIdAndUpdate(
        dataToUpdate.id,
        dataToUpdate,
        {
          new: true,
        }
      );
    } catch (error) {
      logger.error(error);
      return null;
    }
  };

  deleteProduct = async (id) => {
    try {
      return await ProductModel.findByIdAndDelete(id);
    } catch (error) {
      logger.error(error);
      return null;
    }
  };
}

export default new ProductService();
