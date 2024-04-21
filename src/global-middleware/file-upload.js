export function getFileUploadMiddleware(fieldName, saveFilenameTo) {
  return (req, res, next) => {
    // TODO: Implement file upload middleware

    req[saveFilenameTo] = null;
    delete req.body[fieldName];

    next();
  };
}
