<template>
  <div class="container">

    <Category :title="游戏">
      <template slot-scope="eryajf">
        <ul>
          <li v-for="(g,index) in eryajf.games" :key="index">{{g}}</li>
        </ul>
      </template>
    </Category>

    <Category :title="游戏">
      <template slot-scope="{games}">
        <ol>
          <li  style="color:red" v-for="(g,index) in games" :key="index">{{g}}</li>
        </ol>
      </template>
    </Category>

    <Category :title="游戏">
      <template slot-scope="{games}">
        <ol>
          <h4 v-for="(g,index) in games" :key="index">{{g}}</h4>
        </ol>
      </template>
    </Category>

  </div>
</template>

<script>
  import Category from './components/Category.vue'
  export default {
    name:'App',
    components:{Category},
  }
</script>

<style>
.container,.game,h4{
		display: flex;
		justify-content: space-around;
}
</style>