import express, { Request, Response, Router } from 'express';
import { getNazmsByPoet, getNazmsByTag } from 'rekhta';

const router: Router = express.Router();

router.get(
	'/poet/:poet',
	async (req: Request, res: Response): Promise<Response> => {
		const poet = req.params.poet;
		const language = req.query?.lang;
		const count = req.query?.count;
		const sort = req.query?.sort;
		const order = req.query?.order;
		try {
			const nazms = await getNazmsByPoet(poet, language, count, sort, order);
			return res.status(200).json(nazms);
		} catch (error: any) {
			return res.status(400).json({ message: error.toString() });
		}
	},
);

router.get(
	'/tag/:tag',
	async (req: Request, res: Response): Promise<Response> => {
		const tag = req.params.tag;
		const language = req.query?.lang;
		const count = req.query?.count;
		const sort = req.query?.sort;
		const order = req.query?.order;
		try {
			const nazms = await getNazmsByTag(tag, language, count, sort, order);
			return res.status(200).json(nazms);
		} catch (error: any) {
			return res.status(400).json({ message: error.toString() });
		}
	},
);

export default router;
