<template lang="html">
	<va-form ref="form" type="vertical">
		<div
			v-for="(field, ind) in fields" :key="ind"
			v-if="!formMode || ( formMode == 'create' && field.onCreate ) || ( formMode == 'update' && field.onUpdate )"
		>

			<p class="font-weight-bold text-uppercase" style="font-size: 1.1em;" v-if="field.type == 'title'">
				{{ field.title }}
			</p>
			<formTextInput
				ref="formInput"
				v-model="formData[field.key]"
				:field="field"
				:disable="inputDisable(field)"
				:fieldErrors="formErrors[field.key] || null"
				v-else-if="field.type == 'text'"
			/>
			<formTextareaInput
				ref="formInput"
				v-model="formData[field.key]"
				:field="field"
				:disable="inputDisable(field)"
				:fieldErrors="formErrors[field.key] || null"
				v-else-if="field.type == 'textarea'"
			/>
            <formSelectInput
				ref="formInput"
				v-model="formData[field.key]"
				:field="field"
				:disable="inputDisable(field)"
				:fieldErrors="formErrors[field.key] || null"
				v-else-if="field.type == 'select'"
			/>
			<formDateInput
				ref="formInput"
				v-model="formData[field.key]"
				:field="field"
				:disable="inputDisable(field)"
				:fieldErrors="formErrors[field.key] || null"
				v-else-if="field.type == 'date'"
			/>

			<span v-else>{{ field.title }} - {{ field.type }}</span>
		</div>
	</va-form>
</template>

<script>
import formTextInput from '~/components/formBuilder/formTextInput.vue'
import formTextareaInput from '~/components/formBuilder/formTextareaInput.vue'
import formSelectInput from '~/components/formBuilder/formSelectInput.vue'
import formDateInput from '~/components/formBuilder/formDateInput.vue'

import _ from 'lodash'

export default {
	components: {
		formTextInput, formTextareaInput, formSelectInput,
        formDateInput
	},
	props: {
		fields: {
			type: Array,
			default: () => []
		},
		formMode: String,
		formData: Object,
		formErrors: {
			type: Object,
			default: () => {}
		},
		formDisable: {
			type: Boolean,
			default: false
		}
	},
	data () {
		return {
			currForm: null,
		};
	},
	methods: {
		resetForm () {
			_.each(this.$refs.formInput, (one_el) => {
				if (_.isFunction(one_el.resetForm)) {
					one_el.resetForm()
				}
			})
		},
		inputDisable(field) {
			let field_disable = (!_.isEmpty(field.args) && _.isBoolean(field.args.disable)) ? field.args.disable : false;
			return this.formDisable || field_disable;
		}
	},
}
</script>
