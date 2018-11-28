<template lang="html">
    <div class="form-address">
        <form-text-input fieldType="text" fieldName="address" fieldLabel="Adresse" :fieldError="formErrors.address" v-model="formData.address" :showPlaceholder="true" :isLarge="true" />

        <form-text-input fieldType="text" fieldName="address_compl" fieldLabel="Complément d'adresse" :fieldError="formErrors.address_compl" v-model="formData.address_compl" :showPlaceholder="true" :isLarge="true" :hideLabel="true"  :offsetLabel="true" />

        <div class="row">
            <div class="col-sm-9 offset-sm-3">
                <div class="row">
                    <div class="col-sm-4">
                        <form-text-input fieldType="text" fieldName="zip_code" fieldLabel="Code postal" :fieldError="formErrors.zip_code" v-model="formData.zip_code" :showPlaceholder="true" :isLarge="false" :hideLabel="true" />
                    </div>
                    <div class="col-sm-8">
                        <form-text-input fieldType="text" fieldName="city" fieldLabel="Ville" :fieldError="formErrors.city" v-model="formData.city" :showPlaceholder="true" :isLarge="false" :hideLabel="true" />
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-sm-9 offset-sm-3">
                <div class="row">
                    <div class="col-sm-6">
                        <form-select-input fieldName="owner_id" fieldLabel="Etat" :fieldOptions="stateOptions" :isMultiple="false" :fieldError="formErrors.owner_id" v-model="stateSelected" :showPlaceholder="true" :hideLabel="true" :isLarge="false" @selectedChanged="stateChanged()"/>
                    </div>
                    <div class="col-sm-6">
                        <form-select-input fieldName="country" fieldLabel="Pays" :fieldOptions="countryOptions" :isMultiple="false" :fieldError="formErrors.owner_id" v-model="countrySelected" :showPlaceholder="true" :hideLabel="true" :isLarge="false" @selectedChanged="countryChanged()"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import formTextInput from '~/components/formBuilder/formTextInput.vue'
import formSelectInput from '~/components/formBuilder/formSelectInput.vue'

export default {
    props: ['formErrors', 'formData'],
    components: { formTextInput, formSelectInput },
    data () {
        return {
            countryOptions: [],
            countrySelected: null,

            stateOptions: [],
            stateSelected: null,

            firstchange: {
                country: false,
            },
        };
    },
    mounted () {
        if (this.formData.country) {
            this.firstchange.country = true;
        }

        // Get country options
        this.$axios.$get('/public/enums/countries').then((c_resp) => {
            if (c_resp.data) {
                let c_conv = this.$baseo.enumToOptions(c_resp.data, this.formData.country);

                this.countryOptions = c_conv.options;
                this.countrySelected = c_conv.selected;
            }
        });

        if (this.formData.country) {
            this.getState(this.formData.state);
        }
    },
    methods: {
        countryChanged () {
            let c_selected = this.countrySelected;

            if (this.firstchange.country) {
                // Application set country
                this.firstchange.country = false;
            } else {
                // Remove state id and options
                this.stateOptions = [];        // Empty state list
                this.stateSelected = null;     // Empty state selected
                this.formData.state = null;

                if (c_selected) {
                    // User change or set country
                    this.formData.country = c_selected.id;

                    this.getState();
                } else {
                    // User remove country
                    this.formData.country = null;
                }
            }
        },
        getState (curr_id = null) {
            if (this.formData.country) {
                let api_url = 'public/enums/countries/'+ this.formData.country +'/states';

                this.$axios.$get(api_url).then((resp) => {
                    if (resp.data) {
                        let conv = this.$baseo.enumToOptions(resp.data, curr_id);
                        this.stateOptions = conv.options;

                        if (curr_id) {
                            this.stateSelected = conv.selected;
                        }
                    }
                })
            }
        },
        stateChanged () {
            if (this.stateSelected && this.stateSelected.id) {
                this.formData.state = this.stateSelected.id;
            } else {
                this.formData.state = null;
            }
        }
    }
}
</script>
