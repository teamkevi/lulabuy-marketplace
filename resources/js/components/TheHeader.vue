<template>
    <nav class="flex justify-between text-lg py-3 border-b-2 mb-8">
        <router-link :to="{name: 'index'}"><img class="h-12" src="img/logo-header.svg" alt="lulabuy logo"></router-link>
        <ul class="flex font-normal items-center text-gray-700" v-if="!hideNavigationItems">
            <li class="mr-12 cursor-pointer hover:font-bold">
                <router-link :to="{name: 'index'}">Home</router-link>
            </li>
            <li class="mr-12 cursor-pointer hover:font-bold">
                <router-link :to="{name: 'shops'}">Shops</router-link>
            </li>
            <li class="mr-12 cursor-pointer hover:font-bold">
                <router-link :to="{name: 'products'}">Products</router-link>
            </li>
            <li class="mr-12 cursor-pointer hover:font-bold">
                <router-link :to="{name: 'checkout'}">Cart</router-link>
            </li>
            <li>
                <button @click="$router.push('register')" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    computed: {
        hideNavigationItems() {
            return this.$route.name === 'register'
        }
    }
}
</script>
