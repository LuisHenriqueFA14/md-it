import { Request, Response } from "express";
import { HTMLToMarkDownService } from "../services/HTMLToMarkDownService";
import { GetHTMLService } from "../services/GetHTMLService";

interface IQuery {
  url?: string | undefined;
  html?: string | undefined;
}

class HTMLToMarkDownController {
	async handle(req: Request, res: Response) {
		const { html, url }: IQuery = req.body;

		if (!html && !url) {
			throw new Error("No html or url provided");
		}

		const htmlToMarkDownService = new HTMLToMarkDownService();

		const MDHtml = url ? await GetHTMLService.execute(url) : html;

		const markdown = await htmlToMarkDownService.execute(MDHtml);

		return res.json({
			markdown: markdown
		});
	}
}

export { HTMLToMarkDownController };
