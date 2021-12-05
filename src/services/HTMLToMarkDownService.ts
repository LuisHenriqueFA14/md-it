import { JSDOM } from "jsdom";

class HTMLToMarkDownService {
	async execute(html: string): Promise<string> {
		let markdown = "";

		const dom = new JSDOM(html);

		const elements = dom.window.document.body.querySelectorAll("*");

		elements.forEach((item) => {
			const rawMarkdown = this.getMarkDown(item);

			if(rawMarkdown !== "") {
				markdown += rawMarkdown;
				markdown += item.textContent;
				markdown += "\n";
			}
		});

		return markdown;
	}

	private getMarkDown(element: Element): string {
		let markdown = "";

		if (element.nodeName === "H1") {
			markdown += "# ";
		} else if (element.nodeName === "H2") {
			markdown += "## ";
		} else if (element.nodeName === "H3") {
			markdown += "### ";
		} else if (element.nodeName === "H4") {
			markdown += "#### ";
		} else if (element.nodeName === "H5") {
			markdown += "##### ";
		} else if (element.nodeName === "H6") {
			markdown += "###### ";
		} else if (element.nodeName === "P") {
			markdown += "";
		}

		return markdown;
	}
}

export {  HTMLToMarkDownService };
