import app from "./app.js";
import appSsr from "./ssr/app-ssr.js";
import { PORT } from "./config/index.js";
import { PORT_SSR } from "./config/index.js";
import { connect } from "./db/mongoose.js";
import logger from "./logger.js";

connect()
  .then(() => {
    app.listen(PORT, () => {
      logger.info(`Server started at HTTP: //localhost:${PORT}`);
    });
    appSsr.listen(PORT_SSR, () => {
      logger.info(`SSR server started at HTTP: //localhost:${PORT_SSR}`);
    });
  })
  .catch((error) => {
    logger.error(error);
  });
