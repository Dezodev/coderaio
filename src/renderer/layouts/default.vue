<template>
	<va-app class="va-app-wrapper"
		desktop-sidebar-width="220"
    	desktop-minibar-width="55"
	>
		<!-- Minibar -->
		<va-minibar
			:top-items="[{icon:'home'},{icon:'search'},{icon:'user'}]"
			:bottom-items="[{icon:'question'}]"
			theme="darker" />

		<!-- Sidebar -->
		<va-sidebar
			theme="dark"
			:compact="false"
			:text-links="false">
			<va-sidebar-group
				:items="[{name:'Item1'}]"
				title="Category 1"
				:show-toggle="false" />
			<va-sidebar-group
				:items="[{name:'Item1'}]"
				title="Category 2"
				:show-toggle="false" />
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
		};
	}
}
</script>
