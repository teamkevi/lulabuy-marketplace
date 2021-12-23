<template>
    <div>
        <div class="flex mx-40 mt-16">
            <div class="flex flex-col gap-y-2 mr-2">
                <img class="rounded w-32 border-4 border-red-600" src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80" alt="image of product">
                <img class="rounded w-32" src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80" alt="image of product">
                <img class="rounded w-32" src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80" alt="image of product">
            </div>
            <img class="rounded basis-5/12" src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80" alt="image of product">
            <div class="ml-8 w-full basis-5/12">
                <p class="text-3xl font-bold">{{product.name}}</p>
                <p class="text-lg">RM{{product.price}}</p>
                <p class="text-base mt-4">No description available.</p>
                <div class="mt-4">
                    <label class="text-lg font-medium" for="variant">Variant:</label><br>
                    <select class="px-3 py-2" name="variant" id="variant">
                        <option value="0">Please select a size</option>
                        <option value="5">5kg</option>
                        <option value="10">10kg</option>
                    </select>
                </div>
                <div class="mt-4">
                    <label class="text-lg font-medium" for="quantity">Quantity:</label><br>
                    <input class="my-1 px-3 py-2" type="number" id="quantity"><br>
                    <span class="font-light">Only 4 units available</span>
                </div>
                <button class="bg-red-600 hover:bg-red-700 text-white font-medium py-2 rounded w-full mt-4">Add To Cart</button>
            </div>
        </div>
        <!-- <h1 class="text-2xl mt-40 mb-3 font-bold">Featured Products</h1>
        <div class="grid grid-cols-4 gap-4">
            <products-list-item></products-list-item>
        </div> -->
    </div>
</template>

<script>
import ProductsListItem from '../components/ProductsListItem'

export default {
    components: {
        ProductsListItem
    },
    data() {
        return {
            product: null
        }
    },
    created() {
        axios.get(`/api/shops/${this.$route.params.shop_slug}/products/${this.$route.params.product_slug}`).then(response => {
            this.product = response.data[0];
        });
    },
}
</script>