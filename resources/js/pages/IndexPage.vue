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
        <div class="grid grid-cols-4 gap-4">
            <products-list-item
                v-for="product in products" :key="product.id" 
                v-bind:product_name = "product.name"
                v-bind:product_slug = "product.slug"
                v-bind:shop_name = "product.shop.name"
                v-bind:shop_slug = "product.shop.slug"
                v-bind:price = "product.price"
            ></products-list-item>
        </div>
    </div>
</template>

<script>
import CategoriesSelection from '../components/CategoriesSelection'
import ProductsListItem from '../components/ProductsListItem'
import ShopsListItem from '../components/ShopsListItem'
import SearchBar from '../components/SearchBar'

export default {
    components: {
        CategoriesSelection,
        ProductsListItem,
        ShopsListItem,
        SearchBar
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