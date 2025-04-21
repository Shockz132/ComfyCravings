import { pool } from '../db.js';

export const getAllIllnesses = async () => {
  const result = await pool.query('SELECT * FROM cc_illness');
  return result.rows;
};

export const getIllnessById = async (id) => {
  const result = await pool.query('SELECT * FROM cc_illness WHERE illness_id = $1', [id]);
  return result.rows[0];
};

export const createIllness = async (data) => {
  const { name } = data;
  const result = await pool.query(
    'INSERT INTO cc_illness (name) VALUES ($1) RETURNING *',
    [name]
  );
  return result.rows[0];
};

export const updateIllness = async (id, data) => {
  const { name } = data;
  const result = await pool.query(
    'UPDATE cc_illness SET name = $1 WHERE illness_id = $2 RETURNING *',
    [name, id]
  );
  return result.rows[0];
};

export const deleteIllness = async (id) => {
  const result = await pool.query('DELETE FROM cc_illness WHERE illness_id = $1 RETURNING *', [id]);
  return result.rows[0];
};
