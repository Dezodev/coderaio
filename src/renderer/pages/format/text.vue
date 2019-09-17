<template>
	<div class="td-page-format-text">
		<pageHeader title="Texte" :breadcrumbs="breadcrumbs"/>

		<form-builder key="textFormatForm"
			:fields="formFields"
			:formData="formData"
			:formErrors="formErrors"
			formMode="update"
		></form-builder>
	</div>
</template>

<script>
import pageHeader from '~/components/pageHeader.vue'
import formBuilder from '~/components/formBuilder/formBuilder.vue'

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
					onCreate: true,
					onUpdate: true,
				},
			],
			formErrors: {}
        }
    }
}
</script>