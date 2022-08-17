<template>
  <div>
    <Count></Count>
  </div>
</template>

<script>
  import Count from './components/Count.vue'
  export default {
    name:'App',
    components:{Count},
  }
</script>

<style>
.container,.game,h4{
		display: flex;
		justify-content: space-around;
}
</style>