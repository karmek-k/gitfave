import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    return res.redirect('/dashboard');
  }

  return res.render('main/index.njk');
});

export default router;
