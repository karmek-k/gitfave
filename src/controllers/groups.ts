import { Router } from 'express';
import User from '../models/User';
import csrf from '../middleware/csrf';
import validate from '../middleware/validate';
import groupChain from '../validation/group';

const router = Router();

router.get('/', async (req, res) => {
  const { groups } = req.user as User;

  return res.render('groups/all.njk', { groups });
});

router.get('/new', csrf, async (req, res) => {
  return res.render('groups/new.njk', { csrfToken: req.csrfToken() });
});

router.post('/new', csrf, validate(groupChain), async (req, res) => {
  return res.send(req.body);
});

export default router;
