<template>
    <div>
        <search-bar placeholder="Search for products"></search-bar>
        <!-- <div class="mb-4 grid justify-end">
            <button @click="toggleOptions" class="btn text-right">Sort By</button>
            <ul v-if="isOptionsVisible">
                <li class="p-2 bg-white cursor-pointer hover:text-yellow-600">Name (A-Z)</li>
                <li class="p-2 bg-white cursor-pointer hover:text-yellow-600">Name (Z-A)</li>
                <li class="p-2 bg-white cursor-pointer hover:text-yellow-600">Price (High to Low)</li>
                <li class="p-2 bg-white cursor-pointer hover:text-yellow-600">Price (Low to High)</li>
            </ul>
        </div> -->
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
import ProductsListItem from '../components/ProductsListItem'
import SearchBar from '../components/SearchBar'

export default {
    components: {
        ProductsListItem,
        SearchBar
    },
    data() {
        return {
            products: null
        }
    },
    created() {
        const request = axios.get("/api/products").then(response => {
            this.products = response.data;
        });
    }
}
</script>