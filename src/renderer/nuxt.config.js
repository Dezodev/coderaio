/**
* By default, Nuxt.js is configured to cover most use cases.
* This default configuration can be overwritten in this file
* @link {https://nuxtjs.org/guide/configuration/}
*/

module.exports = {
	mode: 'spa', // or 'universal'
	loading: false,

	// Load plugins
	plugins: [
		{ssr: true, src: '@/plugins/icons.js'},
		{ssr: true, src: '@/plugins/vue-atlas.js'},
	],


	// Load modules
	modules: [
	],

	// CSS
	css: [
		'vue-atlas/dist/vue-atlas.css',
		{ src: '~/assets/scss/main.scss', lang: 'scss' },
	],

	// Seo settings
	head: {
		title: 'toolsDesk',
	},
};
