"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLToMarkDownController = void 0;
const HTMLToMarkDownService_1 = require("../services/HTMLToMarkDownService");
const GetHTMLService_1 = require("../services/GetHTMLService");
class HTMLToMarkDownController {
    async handle(req, res) {
        const { html, url } = req.body;
        if (!html && !url) {
            throw new Error("No html or url provided");
        }
        const htmlToMarkDownService = new HTMLToMarkDownService_1.HTMLToMarkDownService();
        const MDHtml = url ? await GetHTMLService_1.GetHTMLService.execute(url) : html;
        const markdown = await htmlToMarkDownService.execute(MDHtml);
        return res.json({
            markdown: markdown
        });
    }
}
exports.HTMLToMarkDownController = HTMLToMarkDownController;
