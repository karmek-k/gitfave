import { Router } from 'express';
import passport from 'passport';

const router = Router();

router.get('/login', passport.authenticate('github', { scope: [] }));

router.get('/logout', (req, res) => {
  req.logout();

  return res.redirect('/');
});

router.get(
  '/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => res.redirect('/')
);

export default router;
