<template>
    <div class="row">
        <div class="col-4">
            <h2 id="ukupno" class="statistike" @mouseover="popUkupno=true" @mouseout="popUkupno=false">{{ukupno}}</h2>
            <div class="opis" v-show="popUkupno">Ukupan broj <b>zarazenih osoba</b></div>
        </div>
        <div class="col-4">
            <h2 id="izleceno" class="statistike" @mouseover="popIzleceno=true" @mouseout="popIzleceno=false">{{izleceno}}</h2>
            <div class="opis" v-show="popIzleceno">Ukupan broj <b>izlecenih slucajeva</b></div>
        </div>
        <div class="col-4">
            <h2 id="mrtvo" class="statistike" @mouseover="popMrtvo=true" @mouseout="popMrtvo=false">{{mrtvo}}</h2>
            <div class="opis" v-show="popMrtvo">Ukupan broj <b>mrtvih slucajeva</b></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            ukupno:0,
            izleceno:0,
            mrtvo:0,
            popUkupno:false,
            popIzleceno:false,
            popMrtvo:false
        }
    },
    created(){
            var ele=['None',0,0,0,0,0,0,0,0]
            this.$store.state.forma.statistika.forEach(element => {
                if(element[0].includes('Serbia')){
                    console.log('Pronadjen'+element)
                    ele=element
                }
            });
            this.pokreniBrojac('ukupno',ele[1],0)
            this.pokreniBrojac('izleceno',ele[5],0)
            this.pokreniBrojac('mrtvo',ele[3],0)
        },
    methods:{
        pokazi(){
            document.getElementById('popup').style.display='block'
        },
        nestani(){
            document.getElementById('popup').style.display='none'
        },
        pokreniBrojac(polje,max,brojac){
            setTimeout(() => {
                    if(polje=='ukupno'){
                        this.ukupno=brojac;
                    }else if(polje=='izleceno'){
                        this.izleceno=brojac;
                    }else{
                        this.mrtvo=brojac;
                    }
                    brojac++;
                    if(brojac<=max){
                        this.pokreniBrojac(polje,max,brojac);
                    }
                }, 10);
        }
    }
}
</script>
<style scoped>
.statistike{
    /* margin-top: 50px; */
    margin-left: 150px;
    padding: 30px;
    text-align: center;
    background-color: white;
    border-radius: 50%;
    height: 100px;
    width: 100px; 
}
.opis{
    text-align: center;
    background: rgba(255, 255, 255, 0.404);
    padding: 10px;
    border-radius: 10px;
    height: 50px;
}
</style>