require("./bootstrap");

import Vue from 'vue';
import VueRouter from "vue-router";
import App from "./App.vue";
import router from "./routes";

window.Vue = require("vue");
Vue.use(VueRouter);

const app = new Vue({
    el: "#app",
    router,
    components: {
        app: App
    }
});