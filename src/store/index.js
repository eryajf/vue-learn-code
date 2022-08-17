// 该文件用于创建Vuex中最为核心的store

import Vue from 'vue'
// 引入vuex
import Vuex from 'vuex'
// 使用vuex
Vue.use(Vuex)

// 准备actions--用于响应组件中的动作
const actions = {}
// 准备mutations--用于操作数据(state)
const mutations = {}
// 准备state--用于存储数据
const state = {}

// 创建并暴漏store
export default new Vuex.Store({
    actions,
    mutations,
    state
})