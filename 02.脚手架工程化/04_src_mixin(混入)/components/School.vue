<template>
  <div>
    <h2 @click="showName">学校名称：{{name}} </h2>
    <h2>学校地址：{{address}} </h2>
  </div>
</template>

<script>
    //  局部引入混合
    // import {hunhe} from '../mixin'

    export default {
        name:'School',
        data() {
            return {
              name:'shangguigu',
              address:'beijing'
            }
        },
        // mixins:[hunhe]
    }
</script>

<style>

</style>