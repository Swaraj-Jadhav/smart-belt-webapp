import * as userService from '../services/user.service.js';
import { validationResult } from "express-validator";

export const joinWaitList = async (req, res) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    return res.status(400).json({ 
      success: false,
      errors: errors.array() 
    });
  }

  try {
    const { name, email, contactNo } = req.body;
    const user = await userService.createUser({ name, email, contactNo });
    const token = user.generateJWT();

    res.status(201).json({ 
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
    res.status(400).json({ 
      success: false,
      message: err.message 
    });
  }
};