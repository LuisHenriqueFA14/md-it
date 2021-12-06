"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetHTMLService = void 0;
const axios_1 = __importDefault(require("axios"));
class GetHTMLService {
    static async execute(url) {
        const response = await axios_1.default.get(url);
        const html = response.data;
        return html;
    }
}
exports.GetHTMLService = GetHTMLService;
