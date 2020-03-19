<template>
<div class="container">
    <h1>{{drzava}}</h1>
    <select v-model="drzava" @change="vratiKoordinate" class="form-control">
        <option v-for="i in $store.state.forma.drzave" :value="i">{{i}}</option>
    </select>  
    </div>
</template>
<script>
export default {
    data(){
        return{
            drzava:'China'
        }
    },
    methods:{
        vratiKoordinate(){
            this.$store.dispatch('vratiKoordinate',this.drzava);
        }
    }
}
</script>
<style scoped>

</style>