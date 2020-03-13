<template>
  <div class="fixed-top">
    <nav class="navbar navbar-expand-lg">
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
            <router-link tag="li" to="/#oNama" class="nav-item">
              <label class="nav-link">O nama</label>
            </router-link>
            <router-link tag="li" to="/#oNama" class="nav-item">
              <label class="nav-link">Kursna lista</label>
            </router-link>
            <router-link tag="li" to="/#oNama" class="nav-item">
              <label class="nav-link">Kalkulator</label>
            </router-link>
            <router-link tag="li" to="/#oNama" class="nav-item">
              <label class="nav-link">Kontakt</label>
            </router-link>
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
  color: white !important;
}
label {
  font-size: 0.5cm;
}
.navbar {
  color: white !important;
  background-color: rgba(36, 35, 35, 0.884);
  height: 60px;
}
.poseta {
  margin-right: 0px;
}
.dialogForm{
  background-color: white;
}
</style>