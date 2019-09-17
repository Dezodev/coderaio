<template>
    <va-page-header>
        <div slot="breadcrumb" v-if="breadcrumbs.length > 0">
            <va-breadcrumb separator="/">
                <va-breadcrumb-item
                    v-for="br in breadcrumbs" :key="br.title"
                    :to="br.link"
                >
                    {{ br.title }}
                </va-breadcrumb-item>
            </va-breadcrumb>
        </div>

        <div slot="title">
            {{ title }}
        </div>

        <div slot="subtitle" v-if="subtitle">
            {{ subtitle }}
        </div>
    </va-page-header>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: '',
        },
        subtitle: {
            type: String,
            default: '',
        },
        breadcrumbs: {
            type: Array,
            default () {
                return []
            }
        }
    }
}
</script>