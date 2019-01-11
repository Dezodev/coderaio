<template lang="html">
	<div :class="['form-group', { 'columns': isLarge}]">

		<label :for="fieldName" :class="['form-label', { 'column col-3': isLarge } ]" v-if="!hideLabel">{{ (!fieldLabel) ? fieldName : fieldLabel }}</label>
		<div :class="[{'col-sm-9': isLarge, 'offset-sm-3': offsetLabel}]">
			<textarea
				:name="fieldName" :id="fieldName" rows="4"
				:class="[ 'form-input', {
					'input-lg': isFieldLg,
					'is-invalid': fieldError,
				}]"
				:value="value" :readonly="isReadonly"
				v-on:input="$emit('input', $event.target.value)">
			></textarea>
			<div :class="['invalid-feedback']" v-if="fieldError">
				{{ fieldError.join(', ') }}
			</div>
		</div>

	</div>
</template>

<script>
export default {
	props: {
		'fieldName': {
			type: String,
			default: '',
		},
		'fieldError': {
			type: Array,
			default: null,
		},
		'value': {},
		'isFieldLg': {
			type: Boolean,
			default: false,
		},
		'fieldLabel': {
			type: String,
		},
		'isLarge': {
			type: Boolean,
			default: false,
		},
		'offsetLabel': {
			type: Boolean,
			default: false,
		},
		'hideLabel': {
			type: Boolean,
			default: false,
		},
		'isReadonly': {
			type: Boolean,
			default: false,
		},
	}
}
</script>
