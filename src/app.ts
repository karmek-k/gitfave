import 'reflect-metadata';
import path from 'path';
import express from 'express';
import nunjucks from 'nunjucks';
import passport from 'passport';
import dotenv from 'dotenv';
dotenv.config();

import createAuthStrategy from './config/authStrategy';

import MainRouter from './controllers/main';

const app = express();

// Templates
nunjucks.configure(path.join('src', 'views'), {
  autoescape: true,
  express: app
});

// Middleware
app.use(express.static(path.join('src', 'assets')));
app.use(passport.initialize());
passport.use(
  createAuthStrategy(
    process.env.CLIENT_ID!,
    process.env.CLIENT_SECRET!,
    process.env.CALLBACK_URL!
  )
);

// Routes
app.use('/', MainRouter);

export default app;
