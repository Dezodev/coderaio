<template>
	<section>
		<h2>Liste applications</h2>

		<div class="columns">
			<div class="column col-4">
				<div class="card">
					<div class="card-header">
						<div class="card-title h5">Mise en forme</div>
					</div>
					<div class="card-body">
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
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	data () {
		return {
		};
	}
}
</script>
