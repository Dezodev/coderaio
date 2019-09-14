<template>
	<va-app class="va-app-wrapper"
		:desktop-sidebar-width="sidebarW"
    	:desktop-minibar-width="minibarW"
	>
		<!-- Minibar -->
		<va-minibar
			:top-items="menuItems.minibar.up"
			:bottom-items="menuItems.minibar.down"
			theme="darker"
		/>

		<!-- Sidebar -->
		<va-sidebar theme="dark">
			<va-sidebar-group
				:items="menuItems.sidebar.format"
				title="Mise en forme"
				:show-toggle="false"
			/>
		</va-sidebar>

		<!-- Page -->
		<va-page size="lg">
			<nuxt />
		</va-page>
	</va-app>
</template>

<script>
export default {
	data () {
		return {
			sidebarW: 220,
			minibarW: 55,

			menuItems: {
				minibar: {
					up: [
						{ icon: 'home', tooltip: 'Liste des applications', method: () => { this.pushTo('home') } },
						{ icon: 'bars', method: this.toggleSidebar },
					],
					down: [
						{ icon: 'info', tooltip: 'A propos', method: () => { this.pushTo('question') } },
					]
				},

				sidebar: {
					format: [
						{ name: 'Texte', route: '/format/text' },
						{ name: 'JSON', route: '/format/json' },
						{ name: 'HTML', route: '/format/html' },
					]
				}
			}
		};
	},
	methods: {
		pushTo(name) {
			let route_path = '/';

			switch (name) {
				case 'home':
					route_path = '/';
					break;
				case 'question':
					route_path = '/about';
					break;
			}

			this.$router.push(route_path)
		},

		toggleSidebar () {
			this.sidebarW = (this.sidebarW != 0) ? 0 : 220
		}
	}
}
</script>
