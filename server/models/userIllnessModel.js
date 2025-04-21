// models/ccUserIllnessModel.js
import { pool } from '../db.js';

// Get all user illnesses
export const getAllUserIllnesses = async () => {
  const result = await pool.query('SELECT * FROM cc_user_illness');
  return result.rows;
};

// Get user illness by ID
export const getUserIllnessById = async (id) => {
  const result = await pool.query('SELECT * FROM cc_user_illness WHERE user_illness_id = $1', [id]);
  return result.rows[0];
};

// Create new user illness
export const createUserIllness = async (data) => {
  const { user_id, illness_id } = data;
  const result = await pool.query(
    'INSERT INTO cc_user_illness (user_id, illness_id) VALUES ($1, $2) RETURNING *',
    [user_id, illness_id]
  );
  return result.rows[0];
};

// Update user illness
export const updateUserIllness = async (id, data) => {
  const { user_id, illness_id } = data;
  const result = await pool.query(
    'UPDATE cc_user_illness SET user_id = $1, illness_id = $2 WHERE user_illness_id = $3 RETURNING *',
    [user_id, illness_id, id]
  );
  return result.rows[0];
};

// Delete user illness
export const deleteUserIllness = async (id) => {
  const result = await pool.query('DELETE FROM cc_user_illness WHERE user_illness_id = $1 RETURNING *', [id]);
  return result.rows[0];
};
