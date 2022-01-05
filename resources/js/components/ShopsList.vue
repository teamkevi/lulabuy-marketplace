<template>
    <div class="grid grid-cols-5 gap-4">
        <div class="card" v-for="shop in shops" :key="shop.id">
            <router-link :to="`/shops/${shop.slug}`">
                <img class="w-full h-64" src="https://cdn5.vectorstock.com/i/1000x1000/73/14/letter-s-on-shop-logo-design-vector-35087314.jpg" alt="image of product">
            </router-link>
            <div class="p-3">
                <router-link :to="`/shops/${shop.slug}`">
                    <p class="no-underline hover:underline font-bold text-xl cursor-pointer">{{shop.name}}</p>
                </router-link>
                <p class="text-base">{{shop.address}}</p>
                <p class="text-base">3.3km</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        shops: Array
    }
}
</script>