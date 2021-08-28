import { createConnection } from 'typeorm';
import dbConfig from './config/db';
import app from './app';

const port = process.env.PORT ?? 8000;

createConnection(dbConfig).then(() =>
  app.listen(port, () => console.log(`Listening at port ${port}`))
);
