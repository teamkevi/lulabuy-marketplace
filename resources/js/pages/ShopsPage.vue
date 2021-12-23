<template>
    <div>
        <search-bar placeholder="Search for shops"></search-bar>
        <!-- <div>
            <button @click="toggleOptions">Sort By</button>
            <div v-if="isOptionsVisible">
                I am visible
            </div>
        </div> -->
        <shops-list></shops-list>
    </div>
</template>

<script>
import ShopsList from '../components/shops/ShopsList'
import SearchBar from '../components/SearchBar'

export default {
    components: {
        ShopsList,
        SearchBar
    },
    data() {
        return {
            isOptionsVisible: false
        }
    },
    methods: {
        toggleOptions() {
            this.isOptionsVisible = !this.isOptionsVisible
        }
    }
}
</script>
