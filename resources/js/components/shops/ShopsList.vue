<template>
    <div class="grid grid-cols-4 gap-4">
        <div class="card" v-for="shop in shops" :key="shop.id">
            <a href="#"><img class="w-full" src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=859&q=80" alt="image of product"></a>
            <div class="p-3">
                <p><a href="#" class="no-underline hover:underline font-bold text-xl cursor-pointer">{{shop.name}}</a></p>
                <p><a href="#" class="no-underline hover:underline text-base cursor-pointer">{{shop.address}}</a></p>
                <p class="text-base">3.3km</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
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