import db from "../database/database.connection.js";

export async function createSession({ userId, token }) {
  return await db.query(
    `INSERT INTO sessions ("userId", token)
    VALUES ($1, $2)`,
    [userId, token]
  );
}

export async function findSessionByToken(token) {
  return await db.query(`SELECT * FROM sessions WHERE token = $1`, [token]);
}
