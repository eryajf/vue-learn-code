<template>
  <div>
    <h2> 学生姓名：{{name}} </h2>
    <h2> 学生性别：{{sex}} </h2>
    <input type="text" v-fbind:value="name">
  </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
              name:'eryajf',
              sex:'男'
            }
        },
    }
</script>

<style>

</style>