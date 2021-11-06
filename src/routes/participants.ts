import * as express from 'express';
import { ISuccessResponse, IFailureResponse } from '../types/fakeZoomApi';
import {
  getAllParticipants,
  getParticipantsByStudentId,
  getParticipantByDbInstance,
} from '../models/participants';

const participantsRouter = express.Router();

participantsRouter.get('/person/:id', async (req, res): Promise<void> => {
  const { id } = req.params;
  try {
    const response = await getParticipantsByStudentId(id);
    res.status(200).send({
      success: true,
      message: `All instances for student with id ${id}`,
      payload: response,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `${error.name}: ${error.message}`,
      status: 500,
    });
  }
});

participantsRouter.get('/:id', async (req, res): Promise<void> => {
  const { id } = req.params;

  try {
    const response = await getParticipantByDbInstance(id);
    res.status(200).send({
      success: true,
      message: `Participant at database instance ${id}`,
      payload: response,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `${error.name}: ${error.message}`,
      status: 500,
    });
  }
});

participantsRouter.get('/', async (_req, res): Promise<void> => {
  try {
    const response = await getAllParticipants();
    res.status(200).send({
      success: true,
      message: 'All participants',
      payload: response,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: `${error.name}: ${error.message}`,
      status: 500,
    });
  }
});

export default participantsRouter;
