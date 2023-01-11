import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const plugins = express();
const corsOptions = {
	origin: `http://localhost:${process.env.PORT || 8000}`,
};

plugins.use(helmet());
plugins.use(cors(corsOptions));

export default plugins;
