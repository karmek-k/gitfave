import express from 'express';
import nunjucks from 'nunjucks';

const app = express();
const port = process.env.PORT ?? 8000;

// Templates
nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.get('/', (req, res) => {
  return res.render('index');
});

app.listen(port, () => console.log(`Listening at port ${port}`));
