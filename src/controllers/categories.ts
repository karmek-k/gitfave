import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  return res.render('categories/all.njk');
});

export default router;
