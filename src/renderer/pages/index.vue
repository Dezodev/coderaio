<template>
	<div class="td-page-home">
		<pageHeader title="Liste des applications"/>

		<div class="line-cat">
			<h2>Mise en forme</h2>
		</div>
		<va-row :gutter="gridGutter">
			<va-column :xs="12" :sm="6" :md="4" v-for="it in appsList.format" :key="it.text">
				<va-card :elevation="cardOpt.elv">
					<nuxt-link :to="it.link">
						{{ it.text }}
					</nuxt-link>
				</va-card>
			</va-column>
		</va-row>
	</div>
</template>

<script>
import pageHeader from '~/components/pageHeader.vue'
import { remote } from 'electron'

export default {
	components: {
		pageHeader
	},
	data () {
		return {
			gridGutter: 15,
			cardOpt: {
				elv: 1,
			},
			appsList: {
				format: [
					{
						text: 'Texte',
						link: '/format/text'
					},
					{
						text: 'JSON',
						link: '/format/json'
					},
					{
						text: 'HTML',
						link: '/format/html'
					},
				]
			}
		}
	},
	methods: {
	}
}
</script>
