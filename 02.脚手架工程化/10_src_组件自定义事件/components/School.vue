<template>
  <div class="school">
    <h2> 学校名称：{{name}} </h2>
    <h2> 学校地址：{{address}} </h2>

    <!-- 通过props组件传递数据 -->
    <button @click="sendSchoolName">点我将学校名发给APP</button>
  </div>
</template>

<script>
    export default {
        name:'School',
        props:['getSchoolName'],
        data() {
            return {
              name:'shangguigua',
              address:'beijing'
            }
        },
        methods: {
          sendSchoolName(){
            this.getSchoolName(this.name)
          }
        },
    }
</script>

<style  scoped>
.school{
  background-color: blue;
}
</style>