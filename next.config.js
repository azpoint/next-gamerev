/** @type {import('next').NextConfig} */
module.exports = {
	// output: "export",
	images: {
		// unoptimized: true
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'localhost',
				port: '1337',
				pathname: '/uploads/**'
			}
		]
	}
};
