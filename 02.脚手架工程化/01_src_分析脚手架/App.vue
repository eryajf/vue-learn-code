<template>
  <div>
    <img src="./assets/logo.png" alt="logo">
    <SchoolName></SchoolName>
    <StudentName></StudentName>
  </div>
</template>

<script>
    // 引入组件
    import SchoolName from './components/SchoolName'
    import StudentName from './components/StudentName'

    export default {
        name:'App',
        components:{
            SchoolName,
            StudentName
        }
    }
</script>