import { Router } from 'express';
import User from '../models/User';
import csrf from '../middleware/csrf';
import validate from '../middleware/validate';
import groupChain from '../validation/group';
import RepoGroup from '../models/RepoGroup';

const router = Router();

router.get('/', async (req, res) => {
  const { id } = req.user as User;
  const user = await User.findOne(id, { relations: ['groups'] });

  return res.render('groups/all.njk', { groups: user?.groups });
});

router.get('/new', csrf, async (req, res) => {
  return res.render('groups/new.njk', { csrfToken: req.csrfToken() });
});

router.post('/new', csrf, validate(groupChain), async (req, res) => {
  const group = new RepoGroup();
  group.name = req.body.name;
  group.user = req.user as User;
  await group.save();

  return res.redirect('/groups');
});

export default router;
