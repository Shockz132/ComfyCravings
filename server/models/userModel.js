// models/userModel.js
import { pool } from '../db.js';

export const getAllUsers = async () => {
  const result = await pool.query('SELECT * FROM cc_user');
  return result.rows;
};

export const getUserById = async (id) => {
  const result = await pool.query('SELECT * FROM cc_user WHERE user_id = $1', [id]);
  return result.rows[0];
};

export const createUser = async ({ email, password }) => {
  const result = await pool.query(
    'INSERT INTO cc_user (email, password) VALUES ($1, $2) RETURNING *',
    [email, password]
  );
  return result.rows[0];
};

export const updateUser = async (id, { email, password }) => {
  const result = await pool.query(
    'UPDATE cc_user SET email = $1, password = $2 WHERE user_id = $3 RETURNING *',
    [email, password, id]
  );
  return result.rows[0];
};

export const deleteUser = async (id) => {
  const result = await pool.query('DELETE FROM cc_user WHERE user_id = $1 RETURNING *', [id]);
  return result.rows[0];
};


// Prisma format
// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()

// export const getAllUsers = () => prisma.cc_user.findMany();

// export const getUserById = (id) =>
//   prisma.cc_user.findUnique({ where: { user_id: parseInt(id) } });

// export const createUser = (data) => prisma.cc_user.create({ data });

// export const updateUser = (id, data) =>
//   prisma.cc_user.update({ where: { user_id: parseInt(id) }, data });

// export const deleteUser = (id) =>
//   prisma.cc_user.delete({ where: { user_id: parseInt(id) } });
