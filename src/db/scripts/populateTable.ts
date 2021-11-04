import { Idb, IParticipant } from '../../types/fakeZoomApi';
import data from '../../../past-meeting-participants';

const db: Idb = require('../index');

const populateTable = async (): Promise<void> => {
  const sqlQuery: string = `INSERT INTO participants (
    id,
    name,
    user_email
  ) VALUES (
    $1,
    $2,
    $3
  ) RETURNING *;`;

  const { participants }: { participants: IParticipant[] } = data;

  try {
    for (let i = 0; i < participants.length; i++) {
      const { id, name, user_email } = participants[i];
      const response = await db.query(sqlQuery, [id, name, user_email]);
      console.log(response.rows[0]);
    }
  } catch (error) {
    console.log(`${error.name}: ${error.message}`);
  }
};

populateTable();
