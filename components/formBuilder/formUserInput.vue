<template lang="html">
    <div :class="[ 'user-select-group', 'form-group', { 'row': isLarge } ]">

        <label :for="fieldName" :class="[ { 'col-sm-3': isLarge } ]" v-if="!hideLabel" :style="{color: 'orange'}">
            {{ (!fieldLabel) ? fieldName : fieldLabel }}
        </label>

        <div :class="[{'col-sm-9': isLarge, 'offset-sm-3': offsetLabel}]">
            <b-dropdown :menuRight="false" :menu="userOptions" @itemClicked="userClicked">
                <template slot="toggle">
                    <userAvatar :user="userSelected" v-if="userSelected"/>
                    <div :class="['user-name', { 'user-name-with-avatar': userSelected }]">
                        <span v-if="userSelected">{{ userSelected.label }}</span>
                        <span v-else>pas de {{ fieldLabel }}</span>

                        <div class="icons-actions">
                            <i class="fas fa-chevron-down"></i>
                        </div>
                    </div>
                </template>
            </b-dropdown>
            <div :class="['invalid-feedback', 'd-block']" v-if="fieldError">
                {{ fieldError.join(', ') }}
            </div>
        </div>
    </div>
</template>

<script>
import userAvatar from '~/components/userAvatar.vue'
import bDropdown from '~/components/bDropdown.vue'

export default {
    components: { userAvatar, bDropdown },
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
            default: false,
        },
        'fieldLabel': {
            type: String,
        },
        'isLarge': {
            default: false,
        },
        'offsetLabel': {
            default: false,
        },
        'hideLabel': {
            default: false,
        },
    },
    data () {
        return {
            userSelected: null,
            userOptions: [],
        }
    },
    mounted () {
        let curr_id = null;

        this.$axios.$get('/api/v1/select/users').then((resp) => {
            if (resp.data) {
                let u_conv = this.$baseo.enumToOptions(resp.data, curr_id, false, true);
                this.userOptions = u_conv.options;
                this.userSelected = u_conv.selected;

                this.userOptions.unshift({ id: 'none', label: 'pas de '+ this.fieldLabel })
            }
        });
    },
    methods: {
        userClicked (item) {
            if (item.id == 'none') {
                this.userSelected = null;
                this.$emit('input', null);
            } else {
                this.userSelected = item;
                this.$emit('input', item.id);
            }
        }
    }
}
</script>
