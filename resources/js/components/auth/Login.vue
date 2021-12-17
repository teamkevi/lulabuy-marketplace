<template>
    <div>
        <label class="font-medium" for="phone">Email Addess</label>
        <input 
            class="mt-2 mb-4 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none w-full rounded-md" 
            type="email" 
            id="email" 
            name="email" 
            placeholder="john@example.com"
        >
        <label class="font-medium" for="phone">Password</label>
        <input 
            class="mt-2 mb-4 px-3 py-2 border shadow-sm border-gray-300 placeholder-gray-400 focus:outline-none w-full rounded-md" 
            type="password" 
            id="password" 
            name="password" 
        >
        <button type="button" class="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-2">Log In</button>
    </div>
</template>