<template lang="html">
	<section class="td-formBuilder-text">
		<va-form-item :label="field.title" class="va-row">
			<va-textarea
				:value="value"
				@input="$emit('input', $event)"
				:resize="true"
				:disabled="disable"
				:placeholder="field.title"
			>
			</va-textarea>
		</va-form-item>
	</section>
</template>

<script>
import _ from 'lodash'

export default {
	props: {
		field: Object,
		fieldErrors: {
			type: Array,
			default: null
		},
		value: {},
		disable: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		validatingMsg () {
			return '';
		},
		helperText () {
			return (!_.isEmpty(this.field.args) && !_.isEmpty(this.field.args.helperText)) ? this.field.args.helperText : null
		}
	}
}
</script>
