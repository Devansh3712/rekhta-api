import express, { Application, Request, Response } from 'express';

import ghazal from './routes/ghazal.js';
import nazm from './routes/nazm.js';
import word from './routes/word.js';

const app: Application = express();

const PORT: string | number = process.env.PORT || 8000;

app.use('/ghazal', ghazal);
app.use('/nazm', nazm);
app.use('/word-of-the-day', word);
app.use('/', (req: Request, res: Response): void => {
	res.status(404).json({ message: 'Endpoint not found' });
});

app.listen(PORT, (): void => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
