<template>
	<div class="e-nuxt-container">
		<h1>Liste des applications</h1>

		<va-row :gutter="gridGutter">
			<va-column :xs="12" :sm="6" :md="4">
				<va-card :elevation="cardOpt.elv">
					<div slot="topLeft">
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
			</va-column>
		</va-row>
	</div>
</template>

<script>
import { remote } from 'electron'

export default {
	components: {},
	data () {
		return {
			gridGutter: 15,
			cardOpt: {
				elv: 0,
			}
		}
	},
	methods: {
	}
}
</script>
