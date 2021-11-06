import { Idb } from '../../types/fakeZoomApi';

const db: Idb = require('../index');
console.log(db);

const deleteTable = async (): Promise<void> => {
  const sqlQuery: string = `DROP TABLE IF EXISTS participants;`;

  try {
    const _response = await db.query(sqlQuery);
    console.log('Participants table deleted');
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};

deleteTable();
