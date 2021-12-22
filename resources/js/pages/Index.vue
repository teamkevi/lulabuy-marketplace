<template>
    <div>
        <search-bar placeholder="Search for anything"></search-bar>
        <img src="img/marketplace-banner.jpg" alt="lulabuy banner">
        <categories-selection></categories-selection>
        <h1 class="text-2xl mt-8 mb-3 font-bold">Featured Shops</h1>
        <shops-list></shops-list>
        <h1 class="text-2xl mt-8 mb-3 font-bold">Featured Products</h1>
        <products-list></products-list>
    </div>
</template>

<script>
import CategoriesSelection from '../components/CategoriesSelection'
import ProductsList from '../components/products/ProductsList'
import ShopsList from '../components/shops/ShopsList'
import SearchBar from '../components/SearchBar'

export default {
    components: {
        CategoriesSelection,
        ProductsList,
        ShopsList,
        SearchBar
    }
}
</script>