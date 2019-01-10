<template lang="html">
	<section>
		<h2>Mise en forme > Texte</h2>

		<formTextareaInput fieldName="text-origin" fieldLabel="Texte d'origine" v-model="textOrigin" />

		<formTextareaInput fieldName="text-transform" fieldLabel="Texte transformé" v-model="textTransform" />

		<div class="btn-actions">
			<va-button @click="textExchange">
				<i class="fas fa-exchange-alt"></i> Echanger
			</va-button>
			<va-dropdown :click-close="true">
				<div slot="trigger">
					<va-button>
						Casse des lettres
						<va-icon type="angle-down" margin="0 0 0 7px"></va-icon>
					</va-button>
				</div>
				<li><a @click="changeLettercase('lower')">Minuscule</a></li>
				<li><a @click="changeLettercase('upper')">Majuscule</a></li>
				<li><a @click="changeLettercase('capitalize')">Mettre une majuscule le premier mot</a></li>
			</va-dropdown>
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
		changeLettercase (mode) {
			if (this.textOrigin) {
				switch (mode) {
				case "lower":
					this.textTransform = this.textOrigin.toLowerCase()
					break;
				case "upper":
					this.textTransform = this.textOrigin.toUpperCase()
					break;
				case "capitalize":
					this.textTransform = this.textOrigin.toLowerCase()
					this.textTransform[0] = this.textTransform[0].toUpperCase();
					break;
				}
			}
		}
	}
}
</script>
