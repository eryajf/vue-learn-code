<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="changeTodo(todo.id)"/>
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input type="text"
              v-show="todo.isEdit"
              :value="todo.title"
              @blur="handleBlur(todo,$event)"
              ref="inputTitle"
            >
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
        <button v-show="!todo.isEdit" class="btn btn-edit" @click="handleEdit(todo)">编辑</button>
    </li>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name:'MyItem',
        // 声明接收todo对象
        props:['todo'],
        methods: {
            // 勾选or取消勾选
            changeTodo(id){
                // 通知App组件将对应的todo对象的done值取反
                // this.checkTodo(id)
                this.$bus.$emit('checkTodo',id)
            },
            // 删除todo--通过事件总线的方式
            // handleDelete(id){
            //     if(confirm('确定删除吗？')){
            //         this.$bus.$emit('deleteTodo',id)
            //     }
            // }
            // 删除todo--通过订阅发布
            handleDelete(id){
              if(confirm('确定删除吗？')){
                pubsub.publish('deleteTodo',id)
              }
            },
            handleEdit(todo){
              if(todo.hasOwnProperty('isEdit')){
                todo.isEdit = true
              } else {
                this.$set(todo,'isEdit',true)
              }
              this.$nextTick(function(){
                this.$refs.inputTitle.focus()
              })
            },
            // 失去焦点回调 （真正执行修改逻辑）
            handleBlur(todo,e){
              todo.isEdit = false
              if(!e.target.value.trim()) return alert('内容不能为空')
              this.$bus.$emit('updateTodo',todo.id,e.target.value)
            }
        },
    }
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
    background-color: gray;
}
li:hover button{
    display: block;
}
</style>