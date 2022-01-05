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
        <products-list v-bind:products="products"></products-list>
    </div>
</template>

<script>
import ProductsList from '../components/ProductsList'
import SearchBar from '../components/SearchBar'

export default {
    components: {
        ProductsList,
        SearchBar
    },
    data() {
        return {
            products: null
        }
    },
    created() {
        axios.get("/api/products").then(response => {
            this.products = response.data;
        });
    }
}
</script>