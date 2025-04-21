import * as illnessModel from '../models/illnessModel.js';

export const getAllIllnesses = async (req, res) => {
  try {
    const illnesses = await illnessModel.getAllIllnesses();
    res.json(illnesses);
  } catch (error) {
    console.error('Error in getAllIllnesses:', error);
    res.status(500).json({ error: 'Failed to fetch illnesses' });
  }
};

export const getIllnessById = async (req, res) => {
  const { id } = req.params;
  try {
    const illness = await illnessModel.getIllnessById(id);
    if (!illness) {
      return res.status(404).json({ error: 'Illness not found' });
    }
    res.json(illness);
  } catch (error) {
    console.error('Error in getIllnessById:', error);
    res.status(500).json({ error: 'Failed to fetch illness' });
  }
};

export const createIllness = async (req, res) => {
  const { illness_name, symptoms } = req.body;
  try {
    const illness = await illnessModel.createIllness({ illness_name, symptoms });
    res.status(201).json(illness);
  } catch (error) {
    console.error('Error in createIllness:', error);
    res.status(500).json({ error: 'Failed to create illness' });
  }
};

export const updateIllness = async (req, res) => {
  const { id } = req.params;
  const { illness_name, symptoms } = req.body;
  try {
    const illness = await illnessModel.updateIllness(id, { illness_name, symptoms });
    if (!illness) {
      return res.status(404).json({ error: 'Illness not found' });
    }
    res.json(illness);
  } catch (error) {
    console.error('Error in updateIllness:', error);
    res.status(500).json({ error: 'Failed to update illness' });
  }
};

export const deleteIllness = async (req, res) => {
  const { id } = req.params;
  try {
    const illness = await illnessModel.deleteIllness(id);
    if (!illness) {
      return res.status(404).json({ error: 'Illness not found' });
    }
    res.json({ message: 'Illness deleted' });
  } catch (error) {
    console.error('Error in deleteIllness:', error);
    res.status(500).json({ error: 'Failed to delete illness' });
  }
};
