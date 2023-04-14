import express from 'express';
import cors from 'cors';
import * as routes from '../api/routes/index.js';
import { genericErrorMiddleware } from '../api/middlewares/genericError.js';

const app = express();

app.use(cors({origin: '*'}));
app.use(express.json());
app.use('/', routes.FileUploadRouter);
app.use(genericErrorMiddleware);

export default app;
