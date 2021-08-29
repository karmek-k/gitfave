import { ConnectionOptions } from 'typeorm';
import dotenv from 'dotenv';
import User from '../models/User';
import RepoGroup from '../models/RepoGroup';
dotenv.config();

const options: ConnectionOptions = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  entities: [User, RepoGroup],
  synchronize: true
};

export default options;
