import { QueryResult } from 'pg';

export interface IParticipant {
  id: string;
  name: string;
  user_email: string;
}

export interface IPastParticipantsResponse {
  page_count: number;
  page_size: number;
  total_records: number;
  next_page_token: string;
  participants: Array<IParticipant>;
}

export interface Idb {
  query: (
    text: string,
    params?: Array<any>,
    callback?: (err: Error, result: QueryResult<any>) => void
  ) => QueryResult<any>;
}
