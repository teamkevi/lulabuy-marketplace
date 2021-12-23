<template>
    <div>
        <div class="w-full h-48 bg-gradient-to-r from-purple-500 to-pink-500" src="#" alt="shop banner"></div>
        <div class="card -mt-8 ml-8 bg-transparent border-0 flex flex-row items-center gap-x-4">
            <img class="w-48 h-48 rounded-full border-4 border-white" src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80" alt="shop logo">
            <div>
                <p class="font-bold text-2xl">{{shop.name}} - {{shop.address}}</p>
                <span class="text-lg">{{shop.rating}}/5</span><a class="ml-2 underline" href="#">see details</a>
                <p class="text-lg">4.6 km</p>
            </div>
        </div>
        <hr class="my-4">
        <search-bar placeholder="Search for anything in Shop A"></search-bar>
        <categories-selection></categories-selection>
        <h1 class="text-2xl mb-3 mt-8 font-bold">Featured Products</h1>
        <div class="grid grid-cols-4 gap-4">
            <products-list-item></products-list-item>
        </div>
        <h1 class="text-2xl mb-3 mt-8 font-bold">Household Items</h1>
        <div class="grid grid-cols-4 gap-4">
            <products-list-item></products-list-item>
        </div>
        <h1 class="text-2xl mb-3 mt-8 font-bold">Fresh Goods</h1>
        <div class="grid grid-cols-4 gap-4">
            <products-list-item></products-list-item>
        </div>
    </div>
</template>

<script>
import ShopsList from '../components/shops/ShopsList'
import ProductsListItem from '../components/ProductsListItem'
import SearchBar from '../components/SearchBar'
import CategoriesSelection from '../components/CategoriesSelection'

export default {
    components: {
        ShopsList,
        ProductsListItem,
        SearchBar,
        CategoriesSelection
    },
    data() {
        return {
            shop: null,
            products: null
        }
    },
    created() {
        axios.get(`/api/shops/${this.$route.params.slug}`).then(response => {
            this.shop = response.data;
        });
        axios.get(`/api/shops/${this.$route.params.slug}/products`).then(response => {
            this.products = response.data;
        });
  },
}
</script>