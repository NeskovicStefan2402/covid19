<template>
  <div>
    <router-view name="header"></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
import Home from './components/Home'
export default {
  components:{
      home:Home
  }
}
</script>

<style>

</style>
