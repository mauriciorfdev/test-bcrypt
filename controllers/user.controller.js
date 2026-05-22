import { UserModel } from '../models/user.model.js';
import bcrypt from 'bcrypt';

//DESC Get All Users
//ROUTE GET /api/users
async function getUsers(req, res) {
  try {
    const users = await UserModel.find().select('name email');

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ msg: 'Internal Server Error' });
  }
}

//DESC Register New User
//ROUTE POST /api/auth/register
async function registerUser(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ msg: 'All fields are required' });
    }

    const existingUser = await UserModel.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ msg: 'Email already exists' });
    }

    const newUser = new UserModel({ name, email, password });
    const insertedUser = await newUser.save();

    return res.status(201).json({ msg: 'User Created' });
  } catch (error) {
    return res.status(500).json({ msg: 'Internal Server Error' });
  }
}

//DESC Login User
// ROUTE POST /api/auth/login
async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ msg: 'Email and password are required' });
    }

    const user = await UserModel.findOne({ email });
    if (!user) return res.status(401).json({ msg: 'Invalid Credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ msg: 'Invalid Credentials' });

    return res.status(200).json({ msg: 'Login Successful' });
  } catch (error) {
    return res.status(500).json({ msg: 'Internal Server Error' });
  }
}

export { getUsers, registerUser, loginUser };
