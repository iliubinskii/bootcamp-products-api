import getUplodMiddleware from "../multer/index.js";
import cloudinaryService from "../cloudinary/service.js";
import logger from "../logger.js";

export function getCloudinaryStorageMiddleware(
  fieldNameForUrl,
  getFilenameFrom
) {
  return async (req, res, next) => {
    // Use getUplodMiddleware as a middleware
    getUplodMiddleware("image-file")(req, res, async () => {
      try {
        logger.info(JSON.stringify({ body: req.body, file: req.file }));
        logger.info(
          `Received request to upload image: ${req.file.originalname}`
        );

        // Upload image to Cloudinary
        const result = await cloudinaryService.uploadImage(req.file.path, "");
        if (!result) {
          return res.status(500).send("Image upload failed");
        }

        // Set the filename and URL in the request body
        const filename = req[getFilenameFrom];
        const url = result.url;
        req.body[fieldNameForUrl] = url;

        // Call next middleware
        next();
      } catch (error) {
        logger.error("Error uploading image:", error);
        return res.status(500).send("Image upload failed");
      }
    });
  };
}
