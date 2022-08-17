<template>
  <div>
    <h2>学校名称：{{name}} </h2>
    <h2>学校地址：{{addr}} </h2>
  </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                name:'shangguigu',
                addr:'beijing'
            }
        },
    }
</script>

<style>

</style>