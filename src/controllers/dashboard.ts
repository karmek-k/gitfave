import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  return res.render('dashboard/index.njk');
});

export default router;
