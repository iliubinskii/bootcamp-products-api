import app from './app.js';
import appSsr from './ssr/app-ssr.js';
import { PORT } from './config/index.js';
import { PORT_SSR } from './config/index.js';
import { connect } from './db/mongoose.js';

connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started at HTTP: //localhost:${PORT}`);
    });
    appSsr.listen(PORT_SSR, () => {
      console.log(`SSR server started at HTTP: //localhost:${PORT_SSR}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
