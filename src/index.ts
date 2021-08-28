import path from 'path';
import express from 'express';
import nunjucks from 'nunjucks';

import MainRouter from './controllers/main';

const app = express();
const port = process.env.PORT ?? 8000;

// Templates
nunjucks.configure(path.join('src', 'views'), {
  autoescape: true,
  express: app
});

// Routes
app.use('/', MainRouter);

app.listen(port, () => console.log(`Listening at port ${port}`));
