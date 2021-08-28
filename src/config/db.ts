import { ConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';
dotenv.config();

const options: ConnectionOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [],
  synchronize: true
};

export default options;
