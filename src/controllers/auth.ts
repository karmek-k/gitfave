import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.get('/login');

router.get(
  '/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => res.redirect('/')
);

export default router;
