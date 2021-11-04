import * as express from 'express';

const app = express();

app.get('/', (req, res) =>
  res.send({ success: true, message: 'Hello world!' })
);

export default app;
