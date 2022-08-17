<template>
  <div class="app">
    <h1>{{msg}} {{studentName}}</h1>
    <School></School>
    <Student></Student>
  </div>
</template>

<script>
    import School from './components/School.vue'
    import Student from './components/Student.vue'
    export default {
        name:'App',
        components:{School,Student},
        data() {
          return {
            msg:'你好啊！',
            studentName:'',
          }
        }
    }
</script>

<style>
.app{
  background-color: gray;
}
</style>