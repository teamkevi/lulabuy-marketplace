<template>
    <div>
        <categories-selection></categories-selection>
        <h1 class="text-3xl mt-8 mb-3">Featured Products</h1>
        <products-list></products-list>
        <h1 class="text-3xl mt-8 mb-3">Featured Shops</h1>
        <shops-list></shops-list>
    </div>
</template>

<script>
import CategoriesSelection from '../components/CategoriesSelection'
import ProductsList from '../components/products/ProductsList'
import ShopsList from '../components/shops/ShopsList'

export default {
    components: {
        CategoriesSelection,
        ProductsList,
        ShopsList
    }
}
</script>