import axios from "axios";

class GetHTMLService {
	static async execute(url: string): Promise<string> {
		const response = await axios.get(url);

		const html = response.data;

		return html;
	}
}

export { GetHTMLService };
