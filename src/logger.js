import { format } from "date-fns";
import winston from "winston";

export default createLogger("info", 3000);

export const ssrLogger = createLogger("info", 8000);

/**
 * @param {string} filename
 * @param {string} level
 * @param {number} port
 * @returns {winston.Logger}
 */
export function createLogger(level, port) {
  return winston.createLogger({
    defaultMeta: { port },
    format: winston.format.combine(
      winston.format.errors({ stack: true }),
      winston.format.timestamp()
    ),
    level,
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.colorize(),
          winston.format.printf(formatters)
        ),
      }),
      /*
      new winston.transports.File({
        filename,
        format: winston.format.printf(formatters),
      }),
      */
    ],
  });
}

/**
 * @param {winston.Logform.TransformableInfo} info
 * @returns {string}
 */
function formatters(info) {
  const { level, message, port, stack, timestamp, requestId } = info;

  const messageStr = stack ?? message;

  const timestampStr = format(timestamp, "d MMM, HH:mm:ss.SSS");

  if (requestId) {
    const requestIdStr = requestId.substr(0, 6);

    return `${level} on port ${port} req ${requestIdStr} at ${timestampStr}: ${messageStr}`;
  }

  return `${level} on port ${port} at ${timestampStr}: ${messageStr}`;
}
