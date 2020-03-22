<template>
<div class="container">
    <h1>{{drzava}}</h1>
    <select v-model="drzava" @change="vratiKoordinate" class="form-control">
        <option v-for="i in $store.state.forma.drzave" :value="i">{{i}}</option>
    </select>
    <br> 
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
            console.log(this.$store.state.forma.koordinate);
            console.log(this.$store.state.forma.koordinateSrbija);
            this.$store.dispatch('vratiKoordinate',this.drzava);
        }
    }
}
</script>
<style scoped>

</style>