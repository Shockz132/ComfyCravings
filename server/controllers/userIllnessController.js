// controllers/ccUserIllnessController.js
import * as ccUserIllnessModel from '../models/userIllnessModel.js';

// Get all user illnesses
export const getAllUserIllnesses = async (req, res) => {
  try {
    const userIllnesses = await ccUserIllnessModel.getAllUserIllnesses();
    res.status(200).json(userIllnesses);
  } catch (error) {
    console.error('Error in getAllUserIllnesses:', error);
    res.status(500).json({ error: 'Failed to fetch user illnesses' });
  }
};

// Get user illness by ID
export const getUserIllnessById = async (req, res) => {
  const { id } = req.params;
  try {
    const userIllness = await ccUserIllnessModel.getUserIllnessById(id);
    if (!userIllness) {
      return res.status(404).json({ error: 'User illness not found' });
    }
    res.status(200).json(userIllness);
  } catch (error) {
    console.error('Error in getUserIllnessById:', error);
    res.status(500).json({ error: 'Failed to fetch user illness' });
  }
};

// Create new user illness
export const createUserIllness = async (req, res) => {
  const { user_id, illness_id } = req.body;
  try {
    const newUserIllness = await ccUserIllnessModel.createUserIllness({ user_id, illness_id });
    res.status(201).json(newUserIllness);
  } catch (error) {
    console.error('Error in createUserIllness:', error);
    res.status(500).json({ error: 'Failed to create user illness' });
  }
};

// Update user illness
export const updateUserIllness = async (req, res) => {
  const { id } = req.params;
  const { user_id, illness_id } = req.body;
  try {
    const updatedUserIllness = await ccUserIllnessModel.updateUserIllness(id, { user_id, illness_id });
    if (!updatedUserIllness) {
      return res.status(404).json({ error: 'User illness not found' });
    }
    res.status(200).json(updatedUserIllness);
  } catch (error) {
    console.error('Error in updateUserIllness:', error);
    res.status(500).json({ error: 'Failed to update user illness' });
  }
};

// Delete user illness
export const deleteUserIllness = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUserIllness = await ccUserIllnessModel.deleteUserIllness(id);
    if (!deletedUserIllness) {
      return res.status(404).json({ error: 'User illness not found' });
    }
    res.status(200).json({ message: 'User illness deleted successfully' });
  } catch (error) {
    console.error('Error in deleteUserIllness:', error);
    res.status(500).json({ error: 'Failed to delete user illness' });
  }
};