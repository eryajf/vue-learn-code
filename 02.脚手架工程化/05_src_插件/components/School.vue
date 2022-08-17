<template>
  <div>
    <h2> 学校名称：{{name | mySlice}} </h2>
    <h2> 学校地址：{{address}} </h2>
  </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
              name:'shangguigua',
              address:'beijing'
            }
        },
        methods: {
          test(){
            this.hello()
          }
        },
    }
</script>

<style>

</style>