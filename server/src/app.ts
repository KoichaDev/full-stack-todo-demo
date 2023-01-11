import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import api from './routes/v1/api.js';
import dotenv from 'dotenv';

const app = express();
dotenv.config();
app.use(
	cors({
		origin: `http://localhost:${process.env.PORT || 8000}`,
	})
);

app.use(helmet());
app.use(express.json());
app.use('/v1', api);

export default app;
