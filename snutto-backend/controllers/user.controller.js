import * as userService from '../services/user.service.js';
import { validationResult } from "express-validator";

export const joinWaitList = async (req, res) => {
  // Validate request
  console.log('Request body:', req.body); // Log incoming data
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array().map(err => ({
        param: err.param,
        message: err.msg
      }))
    });
  }

  try {
    const { name, email, contactNo } = req.body;
    
    // Clean contact number (remove all non-digit characters)
    const cleanedContactNo = contactNo.replace(/\D/g, '');

    const user = await userService.createUser({ 
      name, 
      email, 
      contactNo: cleanedContactNo 
    });

    const token = user.generateJWT();

    return res.status(201).json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        contactNo: user.contactNo
      },
      token
    });

  } catch (err) {
    console.error('Waitlist Error:', err);
    
    // Handle duplicate email error
    if (err.code === 11000 && err.keyPattern?.email) {
      return res.status(409).json({
        success: false,
        message: 'Email already exists in waitlist'
      });
    }

    // Handle other errors
    return res.status(500).json({
      success: false,
      message: 'Failed to join waitlist',
      systemError: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};