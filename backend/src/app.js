import express from 'express';
import cors from 'cors';
import env from './config/env.js';
import { corsOptions } from './config/cors.js';
import routes from './routes/index.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.use(errorHandler);

app.get('/', (req, res) => {
  res.json({ success: true, data: { message: 'API is running', env: env.port } });
});

export default app;

