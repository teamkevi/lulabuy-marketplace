<template>
    <div>
        <search-bar placeholder="Search for anything"></search-bar>
        <img src="img/marketplace-banner.jpg" alt="lulabuy banner">
        <categories-selection></categories-selection>
        <h1 class="text-2xl mt-8 mb-3 font-bold">Featured Shops</h1>
        <shops-list v-bind:shops="shops"></shops-list>
        <h1 class="text-2xl mt-8 mb-3 font-bold">Featured Products</h1>
        <products-list v-bind:products="products"></products-list>
    </div>
</template>

<script>
import CategoriesSelection from '../components/CategoriesSelection'
import ShopsList from '../components/ShopsList'
import SearchBar from '../components/SearchBar'
import ProductsList from '../components/ProductsList'

export default {
    components: {
        SearchBar,
        CategoriesSelection,
        ShopsList,
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