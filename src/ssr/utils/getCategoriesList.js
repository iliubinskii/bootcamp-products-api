import { PORT } from '../../config/index.js';

async function getCategoriesList() {
  try {
    const response = await fetch(`http://localhost:${PORT}/categories`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export default getCategoriesList;
