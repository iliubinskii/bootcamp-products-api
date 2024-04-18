import ProductService from './services.js';

class ProductsController {
  async create(req, res) {
    try {
      const data = req.body;
      const product = await ProductService.createProduct(data);
      return res.status(201).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getAll(req, res) {
    try {
      const productList = await ProductService.getAllProducts();
      return res.json(productList);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async getOne(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: 'Id is not defined' });
      }
      const product = await ProductService.getOne(id);
      return res.json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async editProduct(req, res) {
    try {
      const dataToUpdate = req.body;
      if (!dataToUpdate.id) {
        res.status(400).json({ message: 'Id is not defined' });
      }
      const updatedProduct = await ProductService.editProduct(dataToUpdate);
      return res.json(updatedProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  async deleteProduct(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        res.status(400).json({ message: 'Id is not defined' });
      }
      const book = await ProductService.deleteProduct(id);
      return res.json(book);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

export default new ProductsController();
