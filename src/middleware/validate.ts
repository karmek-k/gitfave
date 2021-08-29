import { NextFunction } from 'express';
import { ValidationChain, validationResult } from 'express-validator';

function validate(chain: ValidationChain[]): any {
  return [
    chain,
    (req: any, res: any, next: NextFunction) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.redirect(req.baseUrl + req.url);
      }

      next();
    }
  ];
}

export default validate;
