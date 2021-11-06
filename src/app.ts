import * as express from 'express';
import participantsRouter from './routes/participants';

const app = express();

app.use('/', express.json());
app.use('/participants', participantsRouter);

app.get('/', (req, res) =>
  res.send({ success: true, message: 'Hello world!' })
);

export default app;
