<template>
  <div class="student">
    <h2> 学生姓名：{{name}} </h2>
    <h2> 学生性别：{{sex}} </h2>
    <h1>{{number}}</h1>
    <button @click="add">点我给number++</button>
    <!-- 通过props组件传递数据 -->
    <button @click="sendStudentName">点我将学生名发给APP</button>
    <button @click="unbind">点我解绑自定义事件</button>
    <button @click="death">点我销毁当前Student组件的实例</button>
  </div>
</template>

<script>
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
          add(){
            console.log('add被调用了');
            this.number++
          },
          sendStudentName(){
            // 触发student组件身上的atguigu事件
            this.$emit('atguigu',this.name,666,888)
            this.$emit('demo')
          },
          unbind(){
            // this.$off('atguigu') // 解绑一个自定义事件
            // this.$off(['atguigu','demo']) // 解绑多个自定义事件
            this.$off() // 解绑所有自定义事件
          },
          death(){
            this.$destroy() // 销毁了当前Student组件的实例，销毁后所有Student实例的自定义事件全🙅🏻不奏效
          }
        },
    }
</script>

<style  scoped>
.student{
  background-color: orange;
}
</style>