/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [{ source: '/', destination: '/integrations', permanent: false }];
	},
};

export default nextConfig;
