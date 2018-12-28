<template>
	<section>
		<h2>Liste applications</h2>

		<va-card :elevation="cardOpt.elv">
			<div slot="left">
				<div class="card-title">Mise en forme</div>
			</div>
			<ul class="list-unstyled">
				<li>
					<nuxt-link to="/format/text">Texte</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/format/json">JSON</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/format/html">HTML</nuxt-link>
				</li>
			</ul>
		</va-card>
	</section>
</template>

<script>
export default {
	data () {
		return {
			cardOpt: {
				elv: 2,
			}
		};
	}
}
</script>
