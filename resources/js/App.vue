<template>
    <div class="mx-20">
        <the-header></the-header>
        <search-bar></search-bar>
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
    }
}
</script>