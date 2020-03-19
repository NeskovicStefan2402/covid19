<template>
    <div id='statistika' class="pozadinaStat">
    <div class="row">
        <div class="col-3" style="height:400px;width:120px;font:16px/26px Georgia, Garamond, Serif;overflow:auto;">
            <vest v-for="i in $store.state.forma.vesti" :vest='i'></vest>
        </div>
        <div class="col-9">
            <div class="row">
                <div class="col-9">
                    <mapa class="map"></mapa>
                </div>
                <div class="col-3">
                    <pretraga class="map"></pretraga>
                </div>
            </div>
        </div>
    </div>
    
    <div class="row">
                    <div id='Aktivno' class="animated col-3 odeljak" @mouseover="selektuj('Aktivno')" @mouseleave="odselektuj('Aktivno')">
                        <h1>{{$store.state.forma.aktivno}}</h1>
                    </div>
                    <div id='Zarazeno' class="animated col-4 odeljak" @mouseover="selektuj('Zarazeno')" @mouseleave="odselektuj('Zarazeno')">
                        <h1>{{$store.state.forma.zarazeno}}</h1>
                    </div>
                     <div id='Umrlo' class="animated col-3 odeljak" @mouseover="selektuj('Umrlo')" @mouseleave="odselektuj('Umrlo')">
                        <h1>{{$store.state.forma.umrlo}}</h1>
                    </div>
            </div>
    </div>
</template>
<script>

import Mapa from './Mapa.vue'
import Vest from './Vest.vue'
import Pretraga from './Pretraga.vue'
export default {
    components:{
        mapa:Mapa,
        pretraga:Pretraga,
        vest:Vest
    },
    
    created(){
        setTimeout(() => {
                this.odrediParametre();        
        }, 1000);
        
    },
    methods:{
        selektuj(naziv){
            document.getElementById(naziv).classList.add('flipInX');
            document.getElementById(naziv).classList.remove('odeljak');
            document.getElementById(naziv).classList.add('selektovan');
            document.getElementById(naziv).innerHTML='<h1>'+naziv+'</h1>';
        },
        odselektuj(naziv){
            var vrednost='';
            if(naziv=='Aktivno'){
                document.getElementById(naziv).innerHTML='<h1>'+this.$store.state.forma.aktivno+'</h1>';
            }else if(naziv=='Zarazeno'){
                document.getElementById(naziv).innerHTML='<h1>'+this.$store.state.forma.zarazeno+'</h1>';
            }else{
                document.getElementById(naziv).innerHTML='<h1>'+this.$store.state.forma.umrlo+'</h1>';
            }
            document.getElementById(naziv).classList.remove('selektovan');
            document.getElementById(naziv).classList.add('odeljak');
            document.getElementById(naziv).classList.remove('flipInX');
        },
        odrediParametre(){
            var lista= this.$store.state.forma.statistika;
            lista.forEach(element => {
                this.$store.state.forma.zarazeno+=element[1];
                this.$store.state.forma.umrlo+=element[3];
                this.$store.state.forma.aktivno+=element[6];
            });
        }
    }
}
</script>
<style scoped>
.map {
    height:400px;
    /* border-radius: 10px;
    margin-top: 100px; */
    background-color: rgb(126, 123, 123, 0.394);
    box-shadow: 7px 7px 8px #888888;
  }
.odeljak{
    height:300px;
    border-radius: 10px;
    /* border: solid black 0.4px; */
    background-color: rgba(151, 60, 60, 0.554);
    margin: 30px;
    box-shadow: 7px 7px 8px #888888;
    text-align: center;
    padding-top: 100px;
}
.selektovan{
    height:300px;
    border-radius: 10px;
    /* border: solid black 0.4px; */
    background-color: #abd3df;
    margin: 30px;
    box-shadow: 7px 7px 8px #888888;
    text-align: center;
    padding-top: 100px;
}
.table{
    margin-top: 100px;
    margin-bottom: 100px;
}

.pozadinaStat{
    background-image: url('../assets/statistikaBack.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    height: 100%;
    width: 100%;
    padding: 70px;
}

</style>
