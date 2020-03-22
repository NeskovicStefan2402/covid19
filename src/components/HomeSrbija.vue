<template>
<div class="home">
    <div class="row">
        <div class="col-3 " style="height:400px;width:120px;font:16px/26px Georgia, Garamond, Serif;overflow:auto;">
            <vest v-for="i in $store.state.forma.domaceVesti" :vest='i'></vest>
        </div>
        <div class="col-6">
            <br>
            <div class="row">
                <div class="col-4">
                    <input type="button" value="Zarazeni" class="form-control" @click="zarazeni">
                </div>
                <div class="col-4">
                    <input type="button" value="Umrli" class="form-control" @click="umrli">
                </div>
                <div class="col-4">
                    <input type="button" value="Izleceni" class="form-control" @click="izleceni">
                </div>
            </div>
            <mapa class="map"></mapa>
        </div>
        <div class="col-3 " style="height:400px;width:120px;font:16px/26px Georgia, Garamond, Serif;overflow:auto;">
            <vest v-for="i in $store.state.forma.informacije" :vest='i'></vest>
        </div>
    </div>
    <br>
    <stats></stats>
</div>
</template>
<script>
import Mapa from './Mapa'
import Vest from './Vest'
import Stats from './SrbijaStats'

export default {
    components:{
        vest:Vest,
        mapa:Mapa,
        stats:Stats
    },
    created(){
        console.log(this.$store.state.forma.koordinate);
        console.log(this.$store.state.forma.koordinateSrbija);
    },
    methods:{
        zarazeni(){
            this.$store.state.forma.izabrani=[];
            this.$store.state.forma.koordinateSrbija.forEach(element => {
                if(element['vrednosti'][0]>0){
                    this.$store.state.forma.izabrani.push(element);
                }
            });
        },
        umrli(){
            this.$store.state.forma.izabrani=[];
            this.$store.state.forma.koordinateSrbija.forEach(element => {
                if(element['vrednosti'][2]>0){
                    this.$store.state.forma.izabrani.push(element);
                }
            });
        },
        izleceni(){
            this.$store.state.forma.izabrani=[];
            this.$store.state.forma.koordinateSrbija.forEach(element => {
                if(element['vrednosti'][1]>0){
                    this.$store.state.forma.izabrani.push(element);
                }
            });
        }
    }
}
</script>
<style scoped>
.home{
    margin-top: 60px;
    background-image: url('../assets/statistikaBack.jpg');
    height: 100vh;
}
.map {
    height:400px;
    /* border-radius: 10px;
    margin-top: 100px; */
    margin-top: 30px;
    background-color: rgb(126, 123, 123, 0.394);
    box-shadow: 7px 7px 8px #888888;
  }
</style>