module.exports = {
	experimental: {
		images: {
			allowFutureImage: true,
		}
	},
	images: {
		domains: ["miro.medium.com"],
	},
	eslint: {
		// Warning: This allows production builds to successfully complete even if
		// your project has ESLint errors.
		ignoreDuringBuilds: true,
	},
};
