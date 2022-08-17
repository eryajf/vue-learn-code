import Vue from "vue"
import App from './App.vue'

Vue.config.productionTip = false


new Vue({
    el: '#app',
    components:{App},
    render: h => h(App),
    beforeCreate() {
        Vue.prototype.$bus = this  // 安装全局事件总线
    },
});