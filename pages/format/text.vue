<template lang="html">
	<section>
		<h2>Mise en forme > Texte</h2>

		<formTextareaInput fieldName="text-origin" fieldLabel="Texte d'origine" v-model="textOrigin" />

		<formTextareaInput fieldName="text-transform" fieldLabel="Texte transformé" v-model="textTransform" />

		<div class="actions">
			<va-button @click="textExchange">
				<i class="fas fa-exchange-alt"></i> Echanger
			</va-button>
		</div>
	</section>
</template>

<script>
import formTextareaInput from "~/components/formBuilder/formTextareaInput.vue"
export default {
	components: { formTextareaInput, },
	data () {
		return {
			textOrigin: '',
			textTransform: '',
		};
	},
	methods: {
		textExchange () {
			let thisOrigin = this.textOrigin,
				thisTransform = this.textTransform;

			this.textOrigin = thisTransform;
			this.textTransform = thisOrigin;
		},
	}
}
</script>
