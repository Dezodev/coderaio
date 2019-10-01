<template>
	<div class="td-page-format-text">
		<pageHeader title="Texte" :breadcrumbs="breadcrumbs"/>

		<form-builder key="textFormatForm"
			:fields="formFields"
			:formData="formData"
			:formErrors="formErrors"
			formMode="update"
		></form-builder>

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
				<li><a @click="changeLettercase('upperFirst')">Mettre une majuscule le premier mot</a></li>
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
	</div>
</template>

<script>
import pageHeader from '~/components/pageHeader.vue'
import formBuilder from '~/components/formBuilder/formBuilder.vue'

import _ from 'lodash'

export default {
	components: { formBuilder, pageHeader },
    data () {
        return {
			breadcrumbs: [
				{ title: 'Liste d\'applications', link: { path: '/'} },
				{ title: 'Mise en forme', link: { path: '/format/'} },
				{ title: 'Texte', link: null },
			],

            formData: {
                textOriginal: '',
                textTransformed: '',
            },
            formFields: [
				{
					title: 'Texte d\'origine',
					key: 'textOriginal',
					type: 'textarea',
					onCreate: true,
					onUpdate: true,
				},
				{
					title: 'Texte transformé',
					key: 'textTransformed',
					type: 'textarea',
					args: {
						disable: true,
					},
					onCreate: true,
					onUpdate: true,
				},
			],
			formErrors: {}
        }
	},
	methods: {
		textExchange () {
			let txtOrigin = this.formData.textOriginal,
				txtTransform = this.formData.textTransformed;

			this.formData.textOriginal = txtTransform;
			this.formData.textTransformed = txtOrigin;
		},
		changeLettercase (mode) {
			console.log('≈≈ changeLettercase: ',mode)
			let txtOrigin = this.formData.textOriginal;

			if (_.isEmpty(mode)) return this.textNotFound();

			switch (mode) {
				case 'lower':
					txtOrigin = _.toLower(txtOrigin);
					break;
				case 'upper':
					txtOrigin = _.toUpper(txtOrigin);
					break;
				case 'upperFirst':
					txtOrigin = _.upperFirst(_.toLower(txtOrigin));
					break;
			}

			this.formData.textTransformed = txtOrigin;
		},
		HTMLEntities (mode) {
			console.log('≈≈ HTMLEntities: ',mode)
			let txtOrigin = this.formData.textOriginal;

			if (_.isEmpty(mode)) return this.textNotFound();

			switch (mode) {
				case 'encode':
					txtOrigin = _.escape(txtOrigin);
					break;
				case 'decode':
					txtOrigin = _.unescape(txtOrigin);
					break;
			}

			this.formData.textTransformed = txtOrigin;
		},
		URIEntities (mode) {
			console.log('≈≈ URIEntities: ',mode)
			let txtOrigin = this.formData.textOriginal;

			if (_.isEmpty(mode)) return this.textNotFound();

			switch (mode) {
				case 'encode':
					txtOrigin = encodeURI(txtOrigin);
					break;
				case 'decode':
					txtOrigin = decodeURI(txtOrigin);
					break;
			}

			this.formData.textTransformed = txtOrigin;
		},
		textNotFound () {
			this.VaToast({
				text: 'Aucun texte trouvé à transformer.',
				type: 'warning',
				placement: 'bottom',
				duration: 4000,
				closeOnClick: true
			})
		}
	}
}
</script>