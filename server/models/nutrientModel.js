import { pool } from '../db.js';

export const getAllNutrients = async () => {
  const result = await pool.query('SELECT * FROM cc_nutrient');
  return result.rows;
};

export const getNutrientById = async (id) => {
  const result = await pool.query('SELECT * FROM cc_nutrient WHERE nutrient_id = $1', [id]);
  return result.rows[0];
};

export const createNutrient = async (data) => {
  const { name } = data;
  const result = await pool.query(
    'INSERT INTO cc_nutrient (name) VALUES ($1) RETURNING *',
    [name]
  );
  return result.rows[0];
};

export const updateNutrient = async (id, data) => {
  const { name } = data;
  const result = await pool.query(
    'UPDATE cc_nutrient SET name = $1 WHERE nutrient_id = $2 RETURNING *',
    [name, id]
  );
  return result.rows[0];
};

export const deleteNutrient = async (id) => {
  const result = await pool.query('DELETE FROM cc_nutrient WHERE nutrient_id = $1 RETURNING *', [id]);
  return result.rows[0];
};
