<template>
  <div>
    <h1 v-text="msg" ref="title"></h1>
    <button ref="btn" @click="showDOM">点我输出上方的DOM元素</button>
    <School ref="sch" />
  </div>
</template>

<script>
    import School from './components/School.vue'
    export default {
        name:'App',
        components:{School},
        data() {
            return {
                msg:'hi'
            }
        },
        methods: {
            showDOM(){
                console.log(this.$refs.title); // 真实DOM元素
                console.log(this.$refs.btn); // 真实DOM元素
                console.log(this.$refs.sch); // school组件的实例对象
            }
        },
    }
</script>