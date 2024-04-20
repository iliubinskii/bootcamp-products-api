import { PORT } from '../../config/index.js';

async function getProductsList(id) {
  try {
    let url = id
      ? `http://localhost:${PORT}/categories/${categoryId}`
      : `http://localhost:${PORT}/products`;

    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}

export default getProductsList;
