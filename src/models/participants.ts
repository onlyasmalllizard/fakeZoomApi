import {
  Idb,
  IParticipant,
  IPastParticipantsResponse,
} from '../types/fakeZoomApi';

const db: Idb = require('../db');

export const getAllParticipants =
  async (): Promise<IPastParticipantsResponse> => {
    const sqlQuery: string = 'SELECT * FROM participants;';

    const data = await db.query(sqlQuery);
    return packageResponse(data.rows);
  };

export const getParticipantsByStudentId = async (
  id: string
): Promise<IPastParticipantsResponse> => {
  const sqlQuery: string = `SELECT * FROM participants WHERE id=$1;`;

  const data = await db.query(sqlQuery, [id]);
  return packageResponse(data.rows);
};

export const getParticipantByDbInstance = async (
  id: string
): Promise<IPastParticipantsResponse> => {
  const sqlQuery: string = 'SELECT * FROM participants WHERE db_id=$1;';

  const data = await db.query(sqlQuery, [id]);
  return packageResponse(data.rows);
};

const packageResponse = (
  response: IParticipant[]
): IPastParticipantsResponse => {
  const recordsNumber = response.length;
  return {
    page_count: 1,
    page_size: 300,
    total_records: recordsNumber,
    next_page_token: '',
    participants: response,
  };
};
