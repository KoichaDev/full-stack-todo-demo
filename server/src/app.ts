import express from 'express';
import plugins from './plugins/plugins.js';
import v1Api from './routes/v1/api.js';

const app = express();

app.use(plugins);
app.use(express.json());
app.use('/v1', v1Api);

export default app;
