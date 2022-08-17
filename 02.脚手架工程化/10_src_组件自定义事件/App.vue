<template>
  <div class="app">
    <h1>{{msg}} {{studentName}}</h1>

    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName"/>

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第一种写法，使用@或v-on) -->
    <!-- <Student @atguigu="getStudentName" @demo="m1"/> -->

  <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据(第二种写法，使用ref) -->
    <Student ref="student" @click.native="show"/>
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
        },
        methods: {
          getSchoolName(name){
            console.log('收到schoolname了',name);
          },
          getStudentName(name,...params){
            console.log('收到studentname了',name,params);
            this.studentName = name
          },
          m1(){
            console.log('demo事件被调用了');
          },
          show(){
            alert(123)
          }
        },
        mounted() {
          // this.$refs.student.$on('atguigu',this.getStudentName) // 绑定自定义事件
          // this.$refs.student.$once('atguigu',this.getStudentName) // 绑定自定义事件（一次性）
        },
    }
</script>

<style>
.app{
  background-color: gray;
}
</style>