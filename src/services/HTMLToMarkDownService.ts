import { JSDOM } from "jsdom";

class HTMLToMarkDownService {
	async execute(html: string): Promise<string> {
		let markdown = "";

		const dom = new JSDOM(html);

		const elements = dom.window.document.body.querySelectorAll("*");

		elements.forEach((item) => {
			if(item.textContent !== "" || item.nodeName == "BR") {
				markdown += this.getMarkDown(item) + item.textContent.replaceAll("\t", "") + "\n";
			}
		});

		return markdown;
	}

	private getMarkDown(element: Element): string {
		let markdown = "";

		if (element.nodeName === "H1") {
			markdown = "# ";
		} else if (element.nodeName === "H2") {
			markdown = "## ";
		} else if (element.nodeName === "H3") {
			markdown = "### ";
		} else if (element.nodeName === "H4") {
			markdown = "#### ";
		} else if (element.nodeName === "H5") {
			markdown = "##### ";
		} else if (element.nodeName === "H6") {
			markdown = "###### ";
		} else if (element.nodeName === "P") {
			markdown = "";
		} else if (element.nodeName === "BR") {
			markdown = "";
		}

		return markdown;
	}
}

export {  HTMLToMarkDownService };
