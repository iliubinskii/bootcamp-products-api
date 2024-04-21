import { PORT } from "../../config/index.js";
import { ssrLogger } from "../../logger.js";

async function getCategoriesList() {
  try {
    const response = await fetch(`http://localhost:${PORT}/categories`);
    const result = await response.json();
    return result;
  } catch (error) {
    ssrLogger.error(error);
  }
}

export default getCategoriesList;
