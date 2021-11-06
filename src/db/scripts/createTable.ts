import { Idb } from '../../types/fakeZoomApi';

const db: Idb = require('../index');

const createTable = async (): Promise<void> => {
  const sqlQuery: string = `CREATE TABLE IF NOT EXISTS participants (
    db_id SERIAL PRIMARY KEY,
    id TEXT,
    name TEXT,
    user_email TEXT
  );`;

  try {
    const _response = await db.query(sqlQuery);
    console.log('Participants table created');
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};

createTable();
