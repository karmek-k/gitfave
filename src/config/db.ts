import { ConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';
import User from '../models/User';
dotenv.config();

const options: ConnectionOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [User],
  synchronize: true
};

export default options;
