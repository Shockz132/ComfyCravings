import * as foodModel from '../models/foodModel.js';

export const getAllFoods = async (req, res) => {
  try {
    const foods = await foodModel.getAllFoods();
    res.json(foods);
  } catch (error) {
    console.error('Error in getAllFoods:', error);
    res.status(500).json({ error: 'Failed to fetch foods' });
  }
};

export const getFoodById = async (req, res) => {
  const { id } = req.params;
  try {
    const food = await foodModel.getFoodById(id);
    if (!food) {
      return res.status(404).json({ error: 'Food not found' });
    }
    res.json(food);
  } catch (error) {
    console.error('Error in getFoodById:', error);
    res.status(500).json({ error: 'Failed to fetch food' });
  }
};

export const createFood = async (req, res) => {
  const { food_name, food_type } = req.body;
  try {
    const food = await foodModel.createFood({ food_name, food_type });
    res.status(201).json(food);
  } catch (error) {
    console.error('Error in createFood:', error);
    res.status(500).json({ error: 'Failed to create food' });
  }
};

export const updateFood = async (req, res) => {
  const { id } = req.params;
  const { food_name, food_type } = req.body;
  try {
    const food = await foodModel.updateFood(id, { food_name, food_type });
    if (!food) {
      return res.status(404).json({ error: 'Food not found' });
    }
    res.json(food);
  } catch (error) {
    console.error('Error in updateFood:', error);
    res.status(500).json({ error: 'Failed to update food' });
  }
};

export const deleteFood = async (req, res) => {
  const { id } = req.params;
  try {
    const food = await foodModel.deleteFood(id);
    if (!food) {
      return res.status(404).json({ error: 'Food not found' });
    }
    res.json({ message: 'Food deleted' });
  } catch (error) {
    console.error('Error in deleteFood:', error);
    res.status(500).json({ error: 'Failed to delete food' });
  }
};
