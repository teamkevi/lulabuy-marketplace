<template>
    <div class="card">
        <router-link :to="`/shops/${shop_slug}/products/${product_slug}`"><img class="w-full h-72" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg" alt="image of product"></router-link>
        <div class="p-3">
            <p><router-link :to="`/shops/${shop_slug}/products/${product_slug}`" class="no-underline hover:underline font-bold text-xl cursor-pointer">{{product_name}}</router-link></p>
            <p v-if="shop_name"><router-link :to="`/shops/${shop_slug}`" class="no-underline hover:underline text-base cursor-pointer">{{shop_name}}</router-link></p>
            <p class="text-base">RM {{price}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product_name: String,
        product_slug: String,
        shop_name: String,
        shop_slug: String,
        price: String
    }
}
</script>