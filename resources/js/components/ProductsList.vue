<template>
    <div class="grid grid-cols-5 gap-4">
        <div 
            class="card"
            v-for="product in products" :key="product.id"
        >
            <router-link :to="`/shops/${product.shop.slug}/products/${product.slug}`"><img class="w-full h-60" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg" alt="image of product"></router-link>
            <div class="p-3">
                <p><router-link :to="`/shops/${product.shop.slug}/products/${product.slug}`" class="no-underline hover:underline font-bold text-xl cursor-pointer">{{product.name}}</router-link></p>
                <p v-if="product.shop.name"><router-link :to="`/shops/${product.shop.slug}`" class="no-underline hover:underline text-base cursor-pointer">{{product.shop.name}}</router-link></p>
                <p class="text-base">RM {{product.price}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        products: Object
        // product_name: String,
        // product_slug: String,
        // shop_name: String,
        // shop_slug: String,
        // price: String
    }
}
</script>