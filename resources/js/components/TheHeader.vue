<template>
    <nav class="flex justify-between text-lg py-4">
        <div>LOGO</div>
        <ul class="flex font-normal items-center text-gray-700">
            <li class="mr-12 cursor-pointer hover:font-bold">
                <router-link :to="{name: 'index'}">Home</router-link>
            </li>
            <li class="mr-12 cursor-pointer hover:font-bold">
                <router-link :to="{name: 'shops'}">Shops</router-link>
            </li>
            <li class="mr-12 cursor-pointer hover:font-bold">
                <router-link :to="{name: 'products'}">Products</router-link>
            </li>
            <li class="mr-12 cursor-pointer hover:font-bold">Cart</li>
            <li>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Sign Up</button>
            </li>
        </ul>
    </nav>
</template>