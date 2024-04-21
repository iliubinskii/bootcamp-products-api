export function getCloudinaryStorageMiddleware(
  fieldNameForUrl,
  getFilenameFrom
) {
  return (req, res, next) => {
    const filename = req[getFilenameFrom];

    // TODO: Implement file upload middleware

    const url = null;

    req.body[fieldNameForUrl] = url;

    next();
  };
}
