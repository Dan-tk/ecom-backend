import { Request, Response, NextFunction } from 'express';
import { isValidObjectId } from 'mongoose';

function checkId(req: Request, res: Response, next: NextFunction): void {
  const id = req.params.id;

  if (!isValidObjectId(id)) {
    res.status(404);
    next(new Error(`Invalid Object ID: ${id}`));
    return;
  }
  
  next();
}

export default checkId;
