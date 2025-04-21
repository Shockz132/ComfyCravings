// controllers/userController.js
import * as userModel from '../models/userModel.js';

export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers();
    res.status(200).json(users);
  } catch (err) {
    console.error('Error in getAllUsers:', err);
    res.status(500).json({ error: err.message });
  }
};

export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await userModel.getUserById(id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const createUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const newUser = await userModel.createUser({ email, password });
    res.status(201).json(newUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { email, password } = req.body;
  try {
    const updatedUser = await userModel.updateUser(id, { email, password });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await userModel.deleteUser(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


// Prisma Format
// // controllers/userController.js
// import * as userModel from '../models/userModel.js';

// export const getAllUsers = async (req, res) => {
//   try {
//     const users = await userModel.getAllUsers();
//     res.json(users);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const getUserById = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const user = await userModel.getUserById(id);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json(user);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const createUser = async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const newUser = await userModel.createUser({ email, password });
//     res.status(201).json(newUser);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const updateUser = async (req, res) => {
//   const { id } = req.params;
//   const { email, password } = req.body;
//   try {
//     const updatedUser = await userModel.updateUser(id, { email, password });
//     if (!updatedUser) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json(updatedUser);
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// export const deleteUser = async (req, res) => {
//   const { id } = req.params;
//   try {
//     const deletedUser = await userModel.deleteUser(id);
//     if (!deletedUser) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json({ message: 'User deleted successfully' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };
