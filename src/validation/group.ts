import { body } from 'express-validator';

export default [body('name').isLength({ min: 3, max: 30 }).trim()];
