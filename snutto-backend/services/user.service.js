import User from "../models/user.model.js";

export const createUser = async ({ name, email, contactNo }) => {
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    const user = await User.create({
      name,
      email,
      contactNo
    });

    return user;
  } catch (error) {
    throw error;
  }
};

export const getAllUsers = async (userId) => {
  try {
    return await User.find({ _id: { $ne: userId } }).select('-__v -createdAt -updatedAt');
  } catch (error) {
    throw error;
  }
};