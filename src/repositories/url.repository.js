import db from "../database/database.connection.js";

export async function createShortUrl({ userId, url, shortUrl }) {
  return db.query(
    `INSERT INTO urls ("userId", url, "shortUrl")
    VALUES ($1, $2, $3)`,
    [userId, url, shortUrl]
  );
}

export async function findUrlById(id) {
  return await db.query(`SELECT * FROM urls WHERE id = $1`, [id]);
}

export async function findUrlByShortUrl(shortUrl) {
  return await db.query(`SELECT * FROM urls WHERE "shortUrl" = $1`, [shortUrl]);
}

export async function updateUrlVisitCountById(id) {
  return await db.query(
    `UPDATE urls SET "visitCount" = "visitCount" + 1 WHERE id = $1`,
    [id]
  );
}
