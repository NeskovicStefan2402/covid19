<template>
  <div id="app">
    <forma></forma>
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
  }
};
</script>

<style>
</style>
