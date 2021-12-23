<template>
    <div class="flex flex-col w-1/3 items-center m-auto mt-4">
        <h1 class="text-3xl font-black">{{ heading }}</h1>
        <p class="mt-2">Or <router-link :to=suggestedRoute class="underline decoration-red-600 decoration-2 hover:font-bold text-black">{{ suggestion }}</router-link></p>
        <form class="card rounded w-full p-4 mt-4">
            <router-view></router-view>
        </form>
    </div>
</template>

<script>
export default {
    computed: {
        heading() {
            return (this.$route.name === 'login') ? "Log in to your account" : "Sign in to your account";
        },
        suggestedRoute() {
            return (this.$route.name === 'login') ? "register" : "login";
        },
        suggestion() {
            return (this.$route.name === 'login') ? "sign up instead" : "log in instead";
        }
    }
}
</script>