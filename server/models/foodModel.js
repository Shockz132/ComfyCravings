// models/foodModel.js
import { pool } from '../db.js';

export const getAllFoods = async () => {
  const result = await pool.query('SELECT * FROM cc_food');
  return result.rows;
};

export const getFoodById = async (id) => {
  const result = await pool.query('SELECT * FROM cc_food WHERE food_id = $1', [id]);
  return result.rows[0];
};

export const createFood = async (data) => {
  const { food_name, food_description } = data;
  const result = await pool.query(
    'INSERT INTO cc_food (food_name, food_description) VALUES ($1, $2) RETURNING *',
    [food_name, food_description]
  );
  return result.rows[0];
};

export const updateFood = async (id, data) => {
  const { food_name, food_description } = data;
  const result = await pool.query(
    'UPDATE cc_food SET food_name = $1, food_description = $2 WHERE food_id = $3 RETURNING *',
    [food_name, food_description, id]
  );
  return result.rows[0];
};

export const deleteFood = async (id) => {
  const result = await pool.query('DELETE FROM cc_food WHERE food_id = $1 RETURNING *', [id]);
  return result.rows[0];
};
