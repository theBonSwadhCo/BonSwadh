import { SECRET_API_KEY } from '$env/static/private';

export const GET = () => {
	return new Response(JSON.stringify(SECRET_API_KEY));
};
