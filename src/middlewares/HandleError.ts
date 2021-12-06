import { Request, Response } from "express";

export function handleError (err: Error, _: Request, res: Response) {
	if(err instanceof Error) {
		return res.status(400).json({
			error: err.message,
		});

	}
	return res.status(500).json({
		status: "error",
		message: "Internal Server Error",
	});
}
