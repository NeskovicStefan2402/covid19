<template>
  <div>
    <h1 class="text-center mt-3">Unesite podatke</h1>
    <b-form-group class="forma col-4 offset-4">
      <b-form-group
        class="form-group"
        id="fieldset-1"
        label="Unesite ime države"
        label-for="drzava"
        :state="state"
      >
        <b-form-input id="drzava" v-model="drzava" :state="state" trim></b-form-input>
      </b-form-group>
      <b-form-group
        class="form-group"
        id="fieldset-2"
        label="Unesite broj godina"
        label-for="godine"
        :state="state"
      >
        <b-form-input type="number" id="godine" v-model="godine" name="godine"></b-form-input>
      </b-form-group>
      <b-form-group
        class="form-group"
        id="fieldset-3"
        label="Unesite grad"
        label-for="grad"
        :state="state"
      >
        <b-form-input id="grad" v-model="grad" trim></b-form-input>
      </b-form-group>
      <b-form-group class="col-4 offset-4 btn-sacuvaj">
        <b-button variant="info">Sačuvaj</b-button>
      </b-form-group>
    </b-form-group>
  </div>
</template>

<script>
export default {
  computed: {
    state() {
      return this.drzava.length >= 4 ? true : false;
    }
  },
  data() {
    return {
      drzava: ""
    };
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
</style>