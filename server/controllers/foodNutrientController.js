import * as foodNutrientModel from '../models/foodNutrientModel.js';

export const getAllFoodNutrients = async (req, res) => {
  try {
    const foodNutrients = await foodNutrientModel.getAllFoodNutrients();
    res.json(foodNutrients);
  } catch (error) {
    console.error('Error in getAllFoodNutrients:', error);
    res.status(500).json({ error: 'Failed to fetch food nutrients' });
  }
};

export const getFoodNutrientById = async (req, res) => {
  const { id } = req.params;
  try {
    const foodNutrient = await foodNutrientModel.getFoodNutrientById(id);
    if (!foodNutrient) {
      return res.status(404).json({ error: 'Food Nutrient not found' });
    }
    res.json(foodNutrient);
  } catch (error) {
    console.error('Error in getFoodNutrientById:', error);
    res.status(500).json({ error: 'Failed to fetch food nutrient' });
  }
};

export const createFoodNutrient = async (req, res) => {
  const { food_id, nutrient_id, quantity } = req.body;
  try {
    const foodNutrient = await foodNutrientModel.createFoodNutrient({ food_id, nutrient_id, quantity });
    res.status(201).json(foodNutrient);
  } catch (error) {
    console.error('Error in createFoodNutrient:', error);
    res.status(500).json({ error: 'Failed to create food nutrient' });
  }
};

export const updateFoodNutrient = async (req, res) => {
  const { id } = req.params;
  const { food_id, nutrient_id, quantity } = req.body;
  try {
    const foodNutrient = await foodNutrientModel.updateFoodNutrient(id, { food_id, nutrient_id, quantity });
    if (!foodNutrient) {
      return res.status(404).json({ error: 'Food Nutrient not found' });
    }
    res.json(foodNutrient);
  } catch (error) {
    console.error('Error in updateFoodNutrient:', error);
    res.status(500).json({ error: 'Failed to update food nutrient' });
  }
};

export const deleteFoodNutrient = async (req, res) => {
  const { id } = req.params;
  try {
    const foodNutrient = await foodNutrientModel.deleteFoodNutrient(id);
    if (!foodNutrient) {
      return res.status(404).json({ error: 'Food Nutrient not found' });
    }
    res.json({ message: 'Food Nutrient deleted' });
  } catch (error) {
    console.error('Error in deleteFoodNutrient:', error);
    res.status(500).json({ error: 'Failed to delete food nutrient' });
  }
};
