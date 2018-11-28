<template lang="html">
    <div :class="[ 'form-group', { 'row': isLarge } ]">

        <label :for="fieldName" :class="[ { 'col-sm-3': isLarge } ]" v-if="!hideLabel">{{ (!fieldLabel) ? fieldName : fieldLabel }}</label>
        <div :class="[ 'row', 'no-gutters', {
            'form-control-lg': isFieldLg,
            'is-invalid': fieldError,
            'col-sm-9': isLarge, 'offset-sm-3': offsetLabel
        }]">
            <div class="col">
                <datepicker
                :monday-first="true" :bootstrap-styling="true" :calendar-button="true"
                calendar-button-icon="far fa-calendar-alt" format="dd/MM/yyyy"
                :language="datepicker_locales.fr" :name="fieldName" :id="fieldName"
                :value="value" @input="emitValue" :disabledDates="disabledDates"
                :clear-button="true" clear-button-icon="fas fa-times"
                v-model="dateVal"
                ></datepicker>
            </div>
            <div class="col-sm-6 col-md-4" v-if="isDatetime">
                <input type="time" @input="emitValue" v-model="timeVal" class="form-control"/>
            </div>
            <div :class="['invalid-feedback', 'd-block', 'col-12']" v-if="fieldError">
                {{ fieldError.join(', ') }}
            </div>
        </div>

    </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
import {en, fr} from '@/node_modules/vuejs-datepicker/dist/locale'

export default {
    components: { Datepicker },
    props: {
        'fieldName' : {
            type: String,
        },
        'fieldError' : {
            type: Array,
            default: () => [],
        },
        'value': {},
        'fieldLabel' : {
            type: String,
        },
        'disabledDates' : {
            type: Object,
            default: () => {},
        },
        'isDatetime' : {
            default: false
        },
        'isFieldLg' : {
            default: false
        },
        'isLarge' : {
            default: false
        },
        'offsetLabel' : {
            default: false
        },
        'hideLabel' : {
            default: false,
        }
    },
    data () {
        let thisTime = null;
        let thisDate = null;

        if (this.value) thisDate = new Date(this.value);

        if (this.isDatetime === true && thisDate) {
            thisTime = thisDate.formatDate('HH:mm');
        }

        return {
            datepicker_locales: {
                en: en,
                fr: fr,
            },
            dateVal: thisDate,
            timeVal: thisTime,
        };
    },
    methods: {
        emitValue (value, el_id) {
            let retDate = this.dateVal;

            if (this.dateVal && this.timeVal) {
                let arrTime = this.timeVal.split(':');

                retDate.setHours(arrTime[0]);
                retDate.setMinutes(arrTime[1]);
            }

            this.$emit('input', retDate);
            this.$emit('dateChanged');
        }
    }
}
</script>
