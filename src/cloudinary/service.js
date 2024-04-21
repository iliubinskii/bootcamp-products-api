import { v2 as cloudinary } from "cloudinary";
import {
  CLOUDINARI_API_KEY,
  CLOUDINARY_CLOUD_NAME,
  CLOUDINARY_SECRET_KEY,
} from "../config/index.js";
import logger from "../logger.js";
import { unlink } from "fs/promises";

cloudinary.config({
  cloud_name: CLOUDINARY_CLOUD_NAME,
  api_key: CLOUDINARI_API_KEY,
  api_secret: CLOUDINARY_SECRET_KEY,
});

const getAssetInfo = async (publicId) => {
  // Return colors in the response
  const options = {
    colors: true,
  };

  try {
    // Get details about the asset
    return await cloudinary.api.resource(publicId, options);
  } catch (error) {
    console.error(error);
  }
};

const uploadImage = async (imagePath, folderPath = "") => {
  const options = {
    use_filename: true,
    unique_filename: false,
    overwrite: true,
    folder: folderPath,
  };

  try {
    const result = await cloudinary.uploader.upload(imagePath, options);
    logger.info(
      `Image uploaded successfully: ${JSON.stringify(result, null, 2)}`
    );
    console.log("imagePass=>", imagePath);
    await unlink(imagePath); // Delete the file after upload
    return result;
  } catch (error) {
    console.error(error);
    throw error; // Ensure error is propagated up, so the file is not deleted if upload fails
  }
};

const destroy = async (publicId) => {
  try {
    await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    logger.error(error);
  }
};

export default {
  getAssetInfo,
  uploadImage,
  destroy,
};
