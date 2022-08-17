<template>
  <div id="app">
    <div class="todo-container">
      <div class="todo-wrap">
        <!-- header -->
        <MyHeader @addTodo="addTodo"></MyHeader>
        <MyList :todos="todos"></MyList>
        <MyFooter
          :todos="todos"
          @checkAllTodo="checkAllTodo"
          @clearAllTodo="clearAllTodo">
        </MyFooter>
      </div>
    </div>
  </div>
</template>

<script>
    import MyFooter from './components/MyFooter.vue'
    import MyHeader from './components/MyHeader.vue'
    import MyList from './components/MyList.vue'

    import  pubsub  from "pubsub-js";
    export default {
        name:'App',
        components:{MyFooter,MyHeader,MyList},
        data() {
            return {
                todos:[
                    {id:'001',title:'抽烟',done:true},
                    {id:'002',title:'喝酒',done:false},
                    {id:'003',title:'开车',done:true}
                ]
            }
        },
        methods: {
          // 添加一个todo
          addTodo(todoObj){
            // console.log('我是App，我接收到了数据：',x);
            this.todos.unshift(todoObj)
          },
          // 勾选or取消勾选一个todo
          checkTodo(id){
            this.todos.forEach((todo)=>{
              if(todo.id === id){
                todo.done = !todo.done
              }
            })
          },
          // 删除一个todo
          deleteTodo(_,id){
            this.todos = this.todos.filter(todo => {
              return todo.id !== id
            })
          },
          // 全选or取消全选
          checkAllTodo(done){
            this.todos.forEach(todo => {
              todo.done = done
            });
          },
          // 清除所有已完成的todo
          clearAllTodo(){
            this.todos = this.todos.filter((todo) =>{
              return !todo.done
            })
          }
        },
        mounted() {
          this.$bus.$on('checkTodo',this.checkTodo)
          // this.$bus.$on('deleteTodo',this.deleteTodo)
          this.pid = pubsub.subscribe('deleteTodo',this.deleteTodo)
        },
        beforeDestroy(){
          this.$bus.$off('checkTodo')
          // this.$bus.$off('deleteTodo')
          pubsub.unsubcribe(this.pid)
        }
    }
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>