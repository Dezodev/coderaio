<template>
    <div class="app-sidebar">
        <h1 class="app-title">CoderAIO</h1>

        <ul class="nav app-sidebar-nav">
            <li class="nav-item">
                <nuxt-link to="/">Liste applications</nuxt-link>
            </li>
            <li class="nav-item">
                <nuxt-link to="/format">Mise en forme</nuxt-link>
                <ul class="nav">
                    <li class="nav-item">
                        <nuxt-link to="/format/json">JSON</nuxt-link>
                    </li>
                    <li class="nav-item">
                        <nuxt-link to="/format/html">HTML</nuxt-link>
                    </li>
                </ul>
            </li>
            <li class="divider"></li>
            <li class="nav-item">
                <nuxt-link to="/settings">Paramètres</nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
}
</script>
