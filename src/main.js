import Vue from "vue"
import App from './App.vue'
// 引入 store
import store from './store'

Vue.config.productionTip = false

new Vue({
    el: '#app',
    components:{App},
    store,
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this
    },
});