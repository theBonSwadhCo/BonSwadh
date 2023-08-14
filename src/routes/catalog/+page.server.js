import { Client } from '@notionhq/client';

const blockId = '2fe19ef6876a4a79ad39d68b33e29956';
export const load = ({ fetch }) => {
	const fetchStories = async () => {
		const res = await fetch('/api/key');
		const data = await res.json();
		const notion = new Client({ auth: data });
		const payload = {
			path: `databases/${blockId}/query`,
			method: 'POST'
		};
		const results = await notion.request(payload);

		return results;
	};
	return fetchStories();
};
