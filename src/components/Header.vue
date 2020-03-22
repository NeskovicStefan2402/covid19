<template>
  <div class="fixed-top">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto"> 
            <router-link tag="li" to="/" class="nav-item">        
              <img src="../assets/logo.png" height="30px;" width="30px;">
            </router-link> 
            <router-link tag="li" to="/#statistika" class="nav-item">
              <label class="nav-link">Statistika</label>
            </router-link>
            <router-link tag="li" to="/#tabela" class="nav-item">
              <label class="nav-link">Tabela</label>
            </router-link>
              <label class="nav-link" @click="srbijaStats">Stanje u Srbiji</label>
            
          </ul>
        </div>
      </div>
      <!-- <label class="nav-link" @click="login">Admin</label> -->
      
      <!-- <router-link class="nav-link poseta" tag='label' to='/admin'>Admin</router-link> -->
      <!-- <label class="nav-link poseta">Broj posetilaca : {{posetioci}}</label> -->
    </nav>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      
    };
  },
  created() {
   
  },
  methods: {
    srbijaStats(){
      this.$store.dispatch('get_Serbia_stats')
      this.$store.dispatch('vratiDomaceVesti')
      this.$store.dispatch('vratiInformacije')
      this.$router.push('/srbija')  
    }
  }
};
</script>
<style scoped>
.menu {
  background-color: rgba(36, 35, 35, 0.658);
}
.nav-item {
  margin-right: 70px;
}
.nav-link {
  color: #178feb !important;
}
label {
  font-size: 0.5cm;
}
.navbar {
  color: #178feb !important;
  background-color: #abd3df;
  height: 60px;
}
.poseta {
  margin-right: 0px;
}
.dialogForm{
  background-color: white;
}
</style>