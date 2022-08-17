<template>
  <div>
    <School/>
    <hr>
    <Student/>
  </div>
</template>

<script>
    import School from './components/School.vue'
    import Student from './components/Student.vue'
    export default {
        name:'App',
        components:{School,Student},
    }
</script>