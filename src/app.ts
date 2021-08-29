import 'reflect-metadata';
import path from 'path';
import express from 'express';
import nunjucks from 'nunjucks';
import passport from 'passport';
import session from 'express-session';
import dotenv from 'dotenv';
dotenv.config();

import createAuthStrategy from './config/authStrategy';

import MainRouter from './controllers/main';
import AuthRouter from './controllers/auth';
import DashboardRouter from './controllers/dashboard';
import CategoriesRouter from './controllers/categories';
import auth from './middleware/auth';

const app = express();

// Templates
nunjucks.configure(path.join('src', 'views'), {
  autoescape: true,
  express: app
});

// Middleware
app.use(express.static(path.join('src', 'assets')));
app.use(
  session({
    secret: process.env.SESSION_SECRET!,
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(
  createAuthStrategy(
    process.env.CLIENT_ID!,
    process.env.CLIENT_SECRET!,
    process.env.CALLBACK_URL!
  )
);

// Routes
app.use('/', MainRouter);
app.use('/auth', AuthRouter);
app.use('/dashboard', auth, DashboardRouter);
app.use('/categories', auth, CategoriesRouter);

export default app;
