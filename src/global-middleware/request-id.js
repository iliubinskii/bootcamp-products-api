import { v4 as uuidv4 } from "uuid";

export default function createRequestId(req, res, next) {
  req.requestId = uuidv4();
  next();
}
