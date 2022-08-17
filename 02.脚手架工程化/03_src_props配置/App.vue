<template>
  <div>
    <Student name="张三" :age="18" sex="男" />
    <Student name="李四" :age="20" sex="女" />
  </div>
</template>

<script>
    import Student from './components/Student.vue'
    export default {
        name:'App',
        components:{Student},
    }
</script>