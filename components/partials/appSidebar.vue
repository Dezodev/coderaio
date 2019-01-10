<template>
	<div class="app-sidebar">
		<h1 class="app-title">ToolsDesk</h1>

		<ul class="nav app-sidebar-nav">
			<li class="nav-item">
				<nuxt-link class="active-on-exact" to="/">
					<i class="icon-menu fas fa-th-large"></i> Liste applications
				</nuxt-link>
			</li>
			<li class="nav-item">
				<nuxt-link to="/format">
					<span class="icon-menu">{ }</span> Mise en forme
				</nuxt-link>
				<ul class="nav">
					<li class="nav-item">
						<nuxt-link to="/format/text">Texte</nuxt-link>
					</li>
					<li class="nav-item">
						<nuxt-link to="/format/json">JSON</nuxt-link>
					</li>
					<li class="nav-item">
						<nuxt-link to="/format/html">HTML</nuxt-link>
					</li>
				</ul>
			</li>
			<li class="divider"></li>
			<li class="nav-item">
				<nuxt-link to="/settings">
					<i class="icon-menu fas fa-cog"></i> Paramètres
				</nuxt-link>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
}
</script>
