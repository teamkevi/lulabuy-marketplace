<template>
    <div class="flex flex-col w-1/3 items-center m-auto">
        <h1 class="text-3xl font-black">Sign in to your account</h1>
        <p class="mt-2">Or <router-link :to="{name: 'login'}" class="underline decoration-red-600 decoration-2 hover:font-bold text-black">log in instead</router-link></p>
        <form class="card rounded w-full p-4 mt-4">
            <router-view></router-view>
        </form>
    </div>
</template>