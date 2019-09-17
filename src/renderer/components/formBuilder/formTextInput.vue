<template lang="html">
	<div :class="[ 'form-group', { 'row': isLarge } ]">

		<label :for="fieldName" :class="[ { 'col-sm-3': isLarge } ]" v-if="!hideLabel">
			{{ (!fieldLabel) ? fieldName : fieldLabel }}
		</label>

		<div :class="[{'col-sm-9': isLarge, 'offset-sm-3': offsetLabel}]">
			<input  :type="fieldType" :name="fieldName" :id="fieldName"
			:class="[ 'form-control', {
				'form-control-lg': isFieldLg,
				'is-invalid': fieldError,
				}]"
				:placeholder="(showPlaceholder === true) ? fieldLabel : '' "
				:value="value" :readonly="isReadonly"
				v-on:input="$emit('input', $event.target.value)"
				>
				<div :class="['invalid-feedback']" v-if="fieldError">
					{{ fieldError.join(', ') }}
				</div>
			</div>
		</div>
	</template>

	<script>
	export default {
		props: {
			'fieldType' : {
				type: String,
				default: 'text',
			},
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
			'showPlaceholder': {
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
