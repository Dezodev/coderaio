<template lang="html">
    <div id="form-actions">
        <btnSave/>
        <slot></slot>
    </div>
</template>

<script>
import btnSave from '~/components/partials/btnSave.vue'

export default {
    components: { btnSave },
}
</script>
