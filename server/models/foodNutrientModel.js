import { pool } from '../db.js';

export const getAllFoodNutrients = async () => {
  const result = await pool.query('SELECT * FROM cc_food_nutrient');
  return result.rows;
};

export const getFoodNutrientById = async (id) => {
  const result = await pool.query('SELECT * FROM cc_food_nutrient WHERE food_nutrient_id = $1', [id]);
  return result.rows[0];
};

export const createFoodNutrient = async (data) => {
  const { food_id, nutrient_id } = data;
  const result = await pool.query(
    'INSERT INTO cc_food_nutrient (food_id, nutrient_id) VALUES ($1, $2) RETURNING *',
    [food_id, nutrient_id]
  );
  return result.rows[0];
};

export const updateFoodNutrient = async (id, data) => {
  const { food_id, nutrient_id } = data;
  const result = await pool.query(
    'UPDATE cc_food_nutrient SET food_id = $1, nutrient_id = $2 WHERE food_nutrient_id = $3 RETURNING *',
    [food_id, nutrient_id, id]
  );
  return result.rows[0];
};

export const deleteFoodNutrient = async (id) => {
  const result = await pool.query('DELETE FROM cc_food_nutrient WHERE food_nutrient_id = $1 RETURNING *', [id]);
  return result.rows[0];
};
