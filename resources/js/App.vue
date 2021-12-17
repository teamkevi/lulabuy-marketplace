<template>
    <div class="mx-20 font-sans">
        <the-header></the-header>
        <search-bar></search-bar>
        <router-view></router-view>
    </div>
</template>

<script>
import TheHeader from './components/TheHeader'
import SearchBar from './components/SearchBar'

export default {
    components: {
        TheHeader,
        SearchBar
    }
}
</script>