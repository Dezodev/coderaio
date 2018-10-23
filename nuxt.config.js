module.exports = {
	mode: 'spa',
	loading: false,		// Disable default loading bar
	dev: process.env.NODE_ENV === 'DEV',

	// Headers of the page
	head: {
		title: 'coderAIO'
	},

	build: {
		extend (config, { isDev, isClient }) {
			if (isDev && isClient) {
				// Run ESLint on save
				config.module.rules.push({
					enforce: 'pre',
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					exclude: /(node_modules)/
				})
			}
			// Extend only webpack config for client-bundle
			if (isClient) { config.target = 'electron-renderer' }
		}
	},

	css: [
		{ src: '~/assets/scss/main.scss', lang: 'scss' }
	],
}
