<template lang="html">
    <form action="" id="main-form" class="form-online">
        <slot></slot>
    </form>
</template>

<script>
export default {
    props: [ 'formData', 'formErrors', 'nextChangeHideBtnSave' ],
    data () {
        return {
            btnSaveDisplayed: false
        };
    },
    mounted () {
        this.$root.$on('hideBtnSave', () => {
            this.hideBtnSave()
        })
        this.$root.$on('showBtnSave', () => {
            this.showBtnSave()
        })
    },
    methods: {
        // To throw up event : this.$root.$emit('hideBtnSave')
        hideBtnSave (){
            this.btnSaveDisplayed = false;
            this.$store.commit('set_page_meta_header', {
                btnSave: false
            })
        },
        // To throw up event : this.$root.$emit('showBtnSave')
        showBtnSave (){
            this.btnSaveDisplayed = true;
            this.$store.commit('set_page_meta_header', {
                btnSave: true
            })
        },
    },
    watch: {
        formData: {
            handler: function(newFormData) {
                if (this.btnSaveDisplayed === false) {
                    if (this.nextChangeHideBtnSave === false) {
                        this.showBtnSave();
                    } else if (this.nextChangeHideBtnSave === true) {
                        this.$emit('update:nextChangeHideBtnSave', false);
                        this.hideBtnSave();
                    }
                }
            },
            deep: true
        },
    },
}
</script>
