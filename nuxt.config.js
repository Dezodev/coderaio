module.exports = {
	mode: 'spa',

	// Headers of the page
	head: {
		title: 'coderAIO',
		link: [
		],
	},
	css: [],

	modules: [
		'@nuxtjs/vuetify'
	],
	vuetify: {
	},

	plugins: [
	],

	// Disable default loading bar
	loading: false,

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
		},
		vendor: [],
	},

	dev: process.env.NODE_ENV === 'DEV',
}
