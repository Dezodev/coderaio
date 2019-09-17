<template lang="html">
    <div :class="[ 'form-group', { 'row': isLarge } ]">
        <div :class="[{'col-sm-9': isLarge, 'offset-sm-3': isLarge}]">
            <div class="custom-control custom-checkbox">
                <input type="checkbox" i:name="fieldName" :id="fieldName" v-model="value"
                    :class="['custom-control-input', { 'is-invalid': fieldError, }]"
                >
                <label :for="fieldName" class="custom-control-label no-format" v-if="hasLabelMsgSlot">
                    <slot name="labelMsg"></slot>
                </label>
                <label :for="fieldName" class="custom-control-label no-format" v-else>{{ (!fieldLabel) ? fieldName : fieldLabel }}</label>
            </div>
            <div :class="['invalid-feedback', 'd-block']" v-if="fieldError">
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
        'fieldLabel': {
            type: String,
        },
        'isLarge': {
            default: false,
        },
    },
    computed: {
        hasLabelMsgSlot () {
            return !!this.$slots['labelMsg']
        }
    },
    watch: {
        value (newV, oldV) {
            if (newV !== oldV) {
                this.$emit('input', newV);
            }
        }
    }
}
</script>
