import { Client } from '@notionhq/client';

export const load = ({ fetch, params }) => {
	const pageId = params.recipe;
	const fetchStories = async () => {
		const res = await fetch('/api/key');
		const data = await res.json();
		const notion = new Client({ auth: data });
		const response = await notion.pages.retrieve({ page_id: pageId });
		const response2 = await notion.blocks.children.list({
			block_id: pageId
		});
		return { properties: response.properties, children: response2.results };
	};
	return fetchStories();
};
