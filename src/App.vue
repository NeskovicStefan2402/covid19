<template>
  <div id="app">
    <router-view name='header'></router-view>
    <router-view></router-view>
  </div>
</template>

<script>
import Forma from "./components/Forma";
import Vue from "vue";
import { BootstrapVue } from "bootstrap-vue";
Vue.use(BootstrapVue);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
export default {
  components: {
    forma: Forma
  },
  created(){
    this.$store.dispatch('get_stats');
    this.$store.dispatch('vratiVesti');
  }
};
</script>

<style>
</style>