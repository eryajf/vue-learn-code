<template>
  <div class="student">
    <h2> 学生姓名：{{name}} </h2>
    <h2> 学生性别：{{sex}} </h2>
    <button @click="sendStudentName">点我把学生名字发送给School</button>
  </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name:'Student',
        data() {
            return {
              name:'eryajf',
              sex:'男',
              number:1
            }
        },
        methods: {
          sendStudentName(){
            // this.$bus.$emit('hello',this.name)
            pubsub.publish('hello',this.name)
          }
        },
    }
</script>

<style  scoped>
.student{
  background-color: orange;
}
</style>