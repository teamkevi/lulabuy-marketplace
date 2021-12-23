<template>
    <div>
        <search-bar placeholder="Search for anything"></search-bar>
        <img src="img/marketplace-banner.jpg" alt="lulabuy banner">
        <categories-selection></categories-selection>
        <h1 class="text-2xl mt-8 mb-3 font-bold">Featured Shops</h1>
        <shops-list></shops-list>
        <h1 class="text-2xl mt-8 mb-3 font-bold">Featured Products</h1>
        <div class="grid grid-cols-4 gap-4">
            <products-list-item></products-list-item>   
        </div>
    </div>
</template>

<script>
import CategoriesSelection from '../components/CategoriesSelection'
import ProductsListItem from '../components/ProductsListItem'
import ShopsList from '../components/shops/ShopsList'
import SearchBar from '../components/SearchBar'

export default {
    components: {
        CategoriesSelection,
        ProductsListItem,
        ShopsList,
        SearchBar
    }
}
</script>