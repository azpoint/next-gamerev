/** @type {import('next').NextConfig} */
module.exports = {
	// output: "export",
	images: {
		// unoptimized: true
		remotePatterns: [toRemotePattern(process.env.CMS_IMAGE_PATTERN)],
	},
	experimental: {
		serverActions: true
	}
};

function toRemotePattern(urlString) {
	const url = new URL(urlString);
	return {
		protocol: url.protocol.replace(":", ""),
		hostname: url.hostname,
		port: url.port,
		pathname: url.pathname,
	};
}
