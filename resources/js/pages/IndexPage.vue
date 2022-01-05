<template>
    <div>
        <search-bar placeholder="Search for anything"></search-bar>
        <img src="img/marketplace-banner.jpg" alt="lulabuy banner">
        <categories-selection></categories-selection>
        <h1 class="text-2xl mt-8 mb-3 font-bold">Featured Shops</h1>
        <div class="grid grid-cols-4 gap-4">
            <shops-list-item
                v-for="shop in shops" :key="shop.id" 
                v-bind:name = "shop.name"
                v-bind:slug = "shop.slug"
                v-bind:address = "shop.address"
            ></shops-list-item>
        </div>
        <h1 class="text-2xl mt-8 mb-3 font-bold">Featured Products</h1>
        <products-list v-bind:products="products"></products-list>
    </div>
</template>

<script>
import CategoriesSelection from '../components/CategoriesSelection'
import ShopsListItem from '../components/ShopsListItem'
import SearchBar from '../components/SearchBar'
import ProductsList from '../components/ProductsList'

export default {
    components: {
        CategoriesSelection,
        ShopsListItem,
        SearchBar,
        ProductsList
    },
    data() {
        return {
            products: null,
            shops: null
        }
    },
    created() {
        axios.get("/api/products").then(response => {
            this.products = response.data;
        });
        axios.get("/api/shops").then(response => {
            this.shops = response.data;
        });
    }
}
</script>