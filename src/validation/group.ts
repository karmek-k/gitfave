import { body } from 'express-validator';

export default [body('name').isLength({ max: 30 }).trim().escape()];
