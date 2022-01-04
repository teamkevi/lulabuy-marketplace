<template>
    <div>
        <search-bar placeholder="Search for shops"></search-bar>
        <!-- <div>
            <button @click="toggleOptions">Sort By</button>
            <div v-if="isOptionsVisible">
                I am visible
            </div>
        </div> -->
        <div class="grid grid-cols-4 gap-4">
            <shops-list-item
                v-for="shop in shops" :key="shop.id" 
                v-bind:name = "shop.name"
                v-bind:slug = "shop.slug"
                v-bind:address = "shop.address"
            ></shops-list-item>
        </div>
    </div>
</template>

<script>
import ShopsListItem from '../components/ShopsListItem'
import SearchBar from '../components/SearchBar'

export default {
    components: {
        ShopsListItem,
        SearchBar
    },
    data() {
        return {
            shops: null
        }
    },
    methods: {
        // toggleOptions() {
        //     this.isOptionsVisible = !this.isOptionsVisible
        // }
    },
    created() {
        axios.get("/api/shops").then(response => {
            this.shops = response.data;
        });
    }
}
</script>
