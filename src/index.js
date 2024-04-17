import app from './app.js';
import { PORT } from './config/index.js';
import { connect } from './db/mongoose.js';

connect()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server started at HTTP: //localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error(error);
  });
