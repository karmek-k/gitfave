import { Router } from 'express';
import User from '../models/User';

const router = Router();

router.get('/', async (req, res) => {
  const { groups } = req.user as User;

  return res.render('groups/all.njk', { groups });
});

export default router;
