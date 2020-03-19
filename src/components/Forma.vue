<template>
  <div>
    <h1 class="text-center formaLogin">Unesite podatke</h1>
    <b-form-group class="forma col-4 offset-4">
      <b-form-group
        class="form-group"
        id="fieldset-1"
        label="Unesite ime države"
        label-for="drzava"
        
      >
        <b-form-input id="drzava" v-model="podaci.drzava" trim></b-form-input>
      </b-form-group>
      <b-form-group
        class="form-group"
        id="fieldset-2"
        label="Unesite broj godina"
        label-for="godine"
        
      >
        <b-form-input type="number" id="godine" v-model="podaci.godine" name="godine" min="1" max="101"></b-form-input>
      </b-form-group>
      <b-form-group
        class="form-group"
        id="fieldset-3"
        label="Unesite grad"
        label-for="grad"
      >
        <b-form-input id="grad" v-model="podaci.grad" trim></b-form-input>
      </b-form-group>
      <b-form-group class="col-4 offset-4 btn-sacuvaj">
        <button class="form-control" @click="nastavi">Nastavi</button>
      </b-form-group>
    </b-form-group>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      podaci:{
              grad:'',
              drzava: '',
              godine:1}
    };
  },
  methods:{
    nastavi(){
      this.$store.state.forma.podaci=this.podaci;
      console.log(this.$store.state.forma.podaci);
      this.$router.push('/home');
    }
  }
};
</script>

<style>
body {
  background-color: white;
}

.btn-sacuvaj {
  text-align: center;
}

.form-group {
  margin-top: 20px;
}
.formaLogin{
  margin-top: 100px;
}
</style>