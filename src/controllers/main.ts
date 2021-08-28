import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.render('main/index.njk', { loggedIn: req.isAuthenticated() });
});

export default router;
