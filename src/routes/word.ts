import express, { Request, Response, Router } from 'express';
import { getWordOfTheDay } from 'rekhta';

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response): Promise<Response> => {
	const date = req.params?.date;
	try {
		const word = await getWordOfTheDay(date);
		return res.status(200).json(word);
	} catch (err: any) {
		return res.status(400).json({ message: err.toString() });
	}
});

export default router;
