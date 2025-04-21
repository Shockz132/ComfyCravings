import * as nutrientModel from '../models/nutrientModel.js';

export const getAllNutrients = async (req, res) => {
  try {
    const nutrients = await nutrientModel.getAllNutrients();
    res.json(nutrients);
  } catch (error) {
    console.error('Error in getAllNutrients:', error);
    res.status(500).json({ error: 'Failed to fetch nutrients' });
  }
};

export const getNutrientById = async (req, res) => {
  const { id } = req.params;
  try {
    const nutrient = await nutrientModel.getNutrientById(id);
    if (!nutrient) {
      return res.status(404).json({ error: 'Nutrient not found' });
    }
    res.json(nutrient);
  } catch (error) {
    console.error('Error in getNutrientById:', error);
    res.status(500).json({ error: 'Failed to fetch nutrient' });
  }
};

export const createNutrient = async (req, res) => {
  const { nutrient_name, unit } = req.body;
  try {
    const nutrient = await nutrientModel.createNutrient({ nutrient_name, unit });
    res.status(201).json(nutrient);
  } catch (error) {
    console.error('Error in createNutrient:', error);
    res.status(500).json({ error: 'Failed to create nutrient' });
  }
};

export const updateNutrient = async (req, res) => {
  const { id } = req.params;
  const { nutrient_name, unit } = req.body;
  try {
    const nutrient = await nutrientModel.updateNutrient(id, { nutrient_name, unit });
    if (!nutrient) {
      return res.status(404).json({ error: 'Nutrient not found' });
    }
    res.json(nutrient);
  } catch (error) {
    console.error('Error in updateNutrient:', error);
    res.status(500).json({ error: 'Failed to update nutrient' });
  }
};

export const deleteNutrient = async (req, res) => {
  const { id } = req.params;
  try {
    const nutrient = await nutrientModel.deleteNutrient(id);
    if (!nutrient) {
      return res.status(404).json({ error: 'Nutrient not found' });
    }
    res.json({ message: 'Nutrient deleted' });
  } catch (error) {
    console.error('Error in deleteNutrient:', error);
    res.status(500).json({ error: 'Failed to delete nutrient' });
  }
};
