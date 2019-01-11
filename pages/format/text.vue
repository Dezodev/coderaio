<template lang="html">
	<section>
		<h2>Mise en forme > Texte</h2>

		<formTextareaInput fieldName="text-origin" fieldLabel="Texte d'origine" v-model="textOrigin" />

		<formTextareaInput fieldName="text-transform" fieldLabel="Texte transformé" :isReadonly="true" v-model="textTransform" />

		<div class="btn-actions">
			<va-button @click="textExchange">
				<i class="fas fa-exchange-alt"></i> Echanger
			</va-button>
			<va-dropdown ref="lettercaseDropdown">
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
			<va-dropdown ref="HTMLEntitiesDropdown">
				<div slot="trigger">
					<va-button>
						Entités HTML
						<va-icon type="angle-down" margin="0 0 0 7px"></va-icon>
					</va-button>
				</div>
				<li><a @click="HTMLEntities('encode')">Encoder</a></li>
				<li><a @click="HTMLEntities('decode')">Décoder</a></li>
			</va-dropdown>
			<va-dropdown ref="URIEntitiesDropdown">
				<div slot="trigger">
					<va-button>
						Encodage URI
						<va-icon type="angle-down" margin="0 0 0 7px"></va-icon>
					</va-button>
				</div>
				<li><a @click="URIEntities('encode')">Encoder</a></li>
				<li><a @click="URIEntities('decode')">Décoder</a></li>
			</va-dropdown>
		</div>
	</section>
</template>

<script>
import formTextareaInput from "~/components/formBuilder/formTextareaInput.vue"
import he from 'he'

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
					let resultTxt = this.textOrigin.toLowerCase()

					this.textTransform = resultTxt.charAt(0).toUpperCase() + resultTxt.slice(1);;
					break;
				}
			} else {
				this.textNotFound()
			}
			this.$refs.lettercaseDropdown.close()
		},
		HTMLEntities (mode) {
			if (this.textOrigin) {
				switch (mode) {
				case 'encode':
					this.textTransform = he.encode(this.textOrigin, {
						'useNamedReferences': true
					})
					break;
				case 'decode':
					this.textTransform = he.decode(this.textOrigin)
					break;
				}
			} else {
				this.textNotFound()
			}
			this.$refs.HTMLEntitiesDropdown.close()
		},
		URIEntities (mode) {
			if (this.textOrigin) {
				switch (mode) {
				case 'encode':
					this.textTransform = encodeURI(this.textOrigin)
					break;
				case 'decode':
					this.textTransform = decodeURI(this.textOrigin)
					break;
				}
			} else {
				this.textNotFound()
			}
			this.$refs.URIEntitiesDropdown.close()
		},
		textNotFound () {
			this.VaToast({
				text: 'Aucun texte trouvé à transformer.',
				type: 'default',
				placement: 'bottom',
				duration: 4000,
				closeOnClick: true
			})
		}
	}
}
</script>
