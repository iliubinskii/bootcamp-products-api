export default function getRequestLogger(logger) {
  return (req, res, next) => {
    const requestId = req.requestId;
    logger.info(`${req.method} ${req.originalUrl} ${requestId}`);
    next();
  };
}
