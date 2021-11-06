import { QueryResult } from 'pg';

export interface IParticipant {
  db_id?: number;
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

export interface ISuccessResponse {
  success: true;
  message: string;
  payload: IPastParticipantsResponse;
}

export interface IFailureResponse {
  success: false;
  status: number;
  message: string;
}
