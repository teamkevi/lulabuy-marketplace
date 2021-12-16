<template>
    <div class="mx-20 font-sans">
        <the-header></the-header>
        <search-bar v-if="!hideSearchBar"></search-bar>
        <router-view></router-view>
    </div>
</template>

<script>
import TheHeader from './components/TheHeader'
import SearchBar from './components/Searchbar'

export default {
    components: {
        TheHeader,
        SearchBar
    },
    computed: {
        hideSearchBar() {
            return this.$route.name === 'checkout' || this.$route.name === 'register'
        }
    }
}
</script>