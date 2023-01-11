import http from 'http';
import app from './app.js';
import dotenv from 'dotenv';
dotenv.config();

async function startServer() {
	const PORT = process.env.PORT || 8000;
	const httpServer = http.createServer(app);

	httpServer.listen(PORT, () => {
		console.log(`🚀 Server listening on port ${PORT}`);
	});
}

startServer();
