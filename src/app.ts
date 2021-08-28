import 'reflect-metadata';
import path from 'path';
import express from 'express';
import nunjucks from 'nunjucks';
import dotenv from 'dotenv';
dotenv.config();

import MainRouter from './controllers/main';

const app = express();

// Templates
nunjucks.configure(path.join('src', 'views'), {
  autoescape: true,
  express: app
});

// Middleware
app.use(express.static(path.join('src', 'assets')));

// Routes
app.use('/', MainRouter);

export default app;
