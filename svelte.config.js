import adapter from '@sveltejs/adapter-cloudflare';

const config = {
	kit: {
		adapter: adapter({
			routes: {
				include: ['/*'],
				exclude: ['/api/*']
			}
		})
	}
};

export default config;
