import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import User from '../models/userModel';  // Adjust this import based on your project structure
import asyncHandler from './asyncHandler';  // Adjust this import based on your project structure

// Extend the Request interface to include the user property
interface CustomRequest extends Request {
  user?: {
    _id: string;
    isAdmin: boolean;
  };
}

// Type guard to check if the user object is valid
const isValidUser = (user: any): user is { _id: string; isAdmin: boolean } => {
  return user && typeof user._id === 'string' && typeof user.isAdmin === 'boolean';
};

const authenticate = asyncHandler(async (req: CustomRequest, res: Response, next: NextFunction) => {
  let token: string | undefined;

  // Read JWT from the 'jwt' cookie
  token = req.cookies.jwt;
  //@ts-ignore
  /* const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string };
  const user = await User.findById(decoded.userId).select('-password').exec(); */

  if (token) {
    try {
      // Verify token and extract payload
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string };
      
      // Fetch user from database
      //@ts-ignore
      req.user = await User.findById(decoded.userId).select('-password')      
        
      
      next();       
    } catch (error) {
      res.status(401);
      throw new Error(`Not authorized, token failed.`);
    }
  } else {
    res.status(401);
    throw new Error('Not authorized, no token.');
  }
});

const authorizeAdmin = (req: CustomRequest, res: Response, next: NextFunction) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).send('Not authorized as an admin.');
  }
};

export { authenticate, authorizeAdmin };
