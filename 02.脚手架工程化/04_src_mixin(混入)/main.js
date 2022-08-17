import Vue from "vue"
import App from './App.vue'
import { hunhe, hunhe2 } from "./mixin";

Vue.config.productionTip = false
Vue.mixin(hunhe,hunhe2) // 全局注册

new Vue({
    el: '#app',
    components:{App},
    render: h => h(App)
});