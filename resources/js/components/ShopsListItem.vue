<template>
    <div class="card">
        <router-link :to="`/shops/${slug}`">
            <img class="w-full h-72" src="https://cdn5.vectorstock.com/i/1000x1000/73/14/letter-s-on-shop-logo-design-vector-35087314.jpg" alt="image of product">
        </router-link>
        <div class="p-3">
            <router-link :to="`/shops/${slug}`">
                <p class="no-underline hover:underline font-bold text-xl cursor-pointer">{{name}}</p>
            </router-link>
            <p class="text-base">{{address}}</p>
            <p class="text-base">3.3km</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: String,
        slug: String,
        address: String
    },
    data() {
        return {
            shops: null
        }
    },
    created() {
        const request = axios.get("/api/shops").then(response => {
            this.shops = response.data;
        });
    }
}
</script>