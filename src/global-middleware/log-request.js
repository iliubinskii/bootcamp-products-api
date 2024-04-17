import { createRequestId } from "./request-id";

export function getRequestLogger(logger) {
  return (req, res, next) => {
    logger.info(`${req.method} ${req.originalUrl} ${createRequestId()}`);
    next();
  };
}
