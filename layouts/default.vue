<template>
	<section class="app-container">
		<appSidebar></appSidebar>
		<div class="app-main-content">
			<nuxt/>
		</div>
	</section>
</template>

<script>
import appSidebar from '~/components/partials/appSidebar.vue'

export default {
	components: { appSidebar }
}
</script>
