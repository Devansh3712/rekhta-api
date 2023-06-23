import express, { Request, Response, Router } from 'express';
import { getWordOfTheDay } from 'rekhta';

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response): Promise<Response> => {
	const date: string =
		req.params?.date || new Date().toISOString().slice(0, 10);
	const word = await getWordOfTheDay(date);
	return res.status(200).json(word);
});

export default router;
