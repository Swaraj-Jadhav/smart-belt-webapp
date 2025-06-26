import { Router } from "express";
import * as userController from '../controllers/user.controller.js';
import { body } from 'express-validator';
import { validateRequest } from './../middlewares/validate-request.js'; 

const router = Router();

router.post('/users/joinWaitList',
  [
    body('name')
      .notEmpty().withMessage("Name is required")
      .trim()
      .isLength({ max: 50 }).withMessage("Name cannot exceed 50 characters"),
      
    body('email')
      .notEmpty().withMessage("Email is required")
      .isEmail().withMessage("Must be a valid email")
      .normalizeEmail(),
      
    body('contactNo')
      .notEmpty().withMessage("Contact number is required")
      .isLength({ min: 10, max: 10 }).withMessage("Contact number must be 10 digits")
      .matches(/^\d+$/).withMessage("Contact number must contain only digits")
  ],
  validateRequest, // Add this middleware
   userController.joinWaitList
);

export default router;