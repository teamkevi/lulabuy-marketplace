<template>
    <div class="mx-20 font-sans">
        <the-header></the-header>
        <search-bar v-if="!isCheckout"></search-bar>
        <router-view></router-view>
    </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import SearchBar from './components/Searchbar.vue'

export default {
    components: {
        TheHeader,
        SearchBar
    },
    computed: {
        isCheckout() {
            return this.$route.name === 'checkout'
        }
    }
}
</script>