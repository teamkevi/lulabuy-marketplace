<template>
    <div>
        <label class="font-medium" for="phone">Phone Number</label>
        <input 
            class="mt-2 mb-4 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none w-full rounded-md" 
            :readonly="isPhoneNumberVerified"
            v-bind:class="{ 'cursor-not-allowed': isPhoneNumberVerified }"
            type="tel" 
            id="phone" 
            name="phone" 
            placeholder="0123456789"
        >
        <div v-if="isPhoneNumberVerified">
            <label class="font-medium" for="first-name">First Name</label>
            <input class="mt-2 mb-4 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none w-full rounded-md" type="text" id="first-name" name="first-name">
            <label class="font-medium" for="last-name">Last Name</label>
            <input class="mt-2 mb-4 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none w-full rounded-md" type="text" id="last-name" name="last-name">
            <label class="font-medium" for="email">Email Address</label>
            <input class="mt-2 mb-4 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none w-full rounded-md" type="email" id="email" name="email">
            <label class="font-medium" for="password">Password</label>
            <input class="mt-2 mb-4 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none w-full rounded-md" type="password" id="password" name="password">
            <label class="font-medium" for="confirm-password">Confirm Password</label>
            <input class="mt-2 mb-4 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none w-full rounded-md" type="password" id="confirm-password" name="confirm-password">
            <button 
                type="button" 
                class="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2" 
                v-on:click="verifyAccount"
                @click="$router.push('index')"
            >Sign In</button>
        </div>
        <button v-if="!isPhoneNumberVerified" type="button" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2" v-on:click="verifyPhoneNumber">Next</button>
    </div>
</template>

<script>
export default {
    data: function () {
        return {
            isPhoneNumberVerified: false
        }
    },
    methods: {
        verifyPhoneNumber() {
            this.isPhoneNumberVerified = true;
        }
    }
}
</script>