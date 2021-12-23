<template>
    <div class="card">
        <a href="#"><img class="w-full h-72" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/assortment-of-colorful-ripe-tropical-fruits-top-royalty-free-image-995518546-1564092355.jpg" alt="image of product"></a>
        <div class="p-3">
            <p><a href="#" class="no-underline hover:underline font-bold text-xl cursor-pointer">{{product_name}}</a></p>
            <router-link :to="`/shops/${shop_slug}`"><p class="no-underline hover:underline text-base cursor-pointer">{{shop_name}}</p></router-link>
            <p class="text-base">RM {{price}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        product_name: String,
        shop_name: String,
        shop_slug: String,
        price: String
    }
}
</script>