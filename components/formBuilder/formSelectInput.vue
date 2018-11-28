<template lang="html">
    <div :class="[ 'form-group', 'v-select-group', { 'row': isLarge } ]">

        <label :for="fieldName" :class="[ { 'col-sm-3': isLarge } ]" v-if="!hideLabel">{{ (!fieldLabel) ? fieldName : fieldLabel }}</label>
        <div :class="[{
            'col-sm-9': isLarge, 'offset-sm-3': offsetLabel
        }]">
            <no-ssr>
                <v-select
                :name="fieldName" :id="fieldName" :multiple="isMultiple"
                :value="value" @input="selected" :options="fieldOptions"
                maxHeight="200px" :placeholder="(showPlaceholder === true) ? fieldLabel : '' "
                ></v-select>
            </no-ssr>
            <div :class="['invalid-feedback', 'd-block']" v-if="fieldError">
                {{ fieldError.join(', ') }}
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        'fieldOptions': {
            type: [Array, Object],
            default: [],
        },
        'isMultiple': {
            default: false,
        },
        'fieldName': {
            type: String,
        },
        'fieldError': {
            type: Array,
            default: null,
        },
        'value': {},
        'isFieldLg': {
            default: false
        },
        'fieldLabel': {
            type: String
        },
        'isLarge': {
            default: false,
        },
        'offsetLabel': {
            default: false
        },
        'hideLabel': {
            default: false
        },
        'showPlaceholder': {
            default: false
        },
    },
    methods: {
        selected (value, id) {
            if(value) {
                this.$emit('input', value);
            } else {
                this.$emit('input', null);
            }
            this.$emit('selectedChanged');
        }
    }
}
</script>
