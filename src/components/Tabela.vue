<template>
<div id='tabela' class="table">
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
            <input type="text" v-model="filterData" class="form-control search" placeholder='Unesite naziv drzave za pretragu'>
            <br>
        </div>
        <div class="col-3"></div>
    </div>
    <table class="container">
        
    <thead>
      <tr class="naslov">
            <th></th>
            <th>Drzava</th>
            <th>Ukupno zarazenih</th>
            <th>Novo zarazeni</th>
            <th>Ukupno preminulo</th>
            <th>Novo preminulo</th>
            <th>Ukupno izleceno</th>
            <th>Aktivno zarazeni</th>
            <th>Kriticno</th>
            <th>U odnosu na 1M</th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="i,index in $store.state.forma.statistika.filter(ele=>ele[0].toLowerCase().includes(filterData.toLowerCase())).slice(brojac*10, brojac*10+10)" class="tabela">
            <th>{{(brojac*10)+index+1}}</th>
            <th class="drzave">{{i[0]}}</th>
            <th>{{i[1]}}</th>
            <th class="opasni">+{{i[2]}}</th>
            <th>{{i[3]}}</th>
            <th class="opasni">+{{i[4]}}</th>
            <th>{{i[5]}}</th>
            <th>{{i[6]}}</th>
            <th>{{i[7]}}</th>
            <th>{{i[8]}}</th>
        </tr>
    </tbody>
    </table>
    <br>
    <div class="row">
        <div class="col-3">
            <input type="button" value="<" class="form-control dugme" @click="prethodna">
        </div>
        <div class="col-6 row" style="text-align:center;">
            <div class="col-5"></div>
            <div class="col-2">
                <input class="polje" v-model="brojac">
            </div>
            <div class="col-5"></div>
        </div>
        <div class="col-3">
            <input type="button" value=">" class="form-control dugme" @click="naredna">    
        </div>
    </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            brojac:1,
            filterData:''
        }
    },
    // created(){
    //     console.log(this.$store.state.forma.statistika.filter(ele=>ele[0].includes('')).slice(1*10, 1*10+10))
    // },
    methods:{
        naredna(){
            if(this.brojac*10+10 < this.$store.state.forma.statistika.length){
                this.brojac++;
                console.log(this.brojac)
            }
        },
        prethodna(){
            if(this.brojac>0){
                this.brojac--;    
                console.log(this.brojac)
            }
        }
    }
}
</script>
<style scoped>
.naslov{
    background-color: rgb(44, 145, 189);
    color: white;
    text-align: center;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
.tabela{
    background-color: rgba(126, 123, 123, 0.394);
    /* color: white; */
    text-align: center;
    height: 70px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;  
}
.table{
    background-image: url('../assets/tabelaBack.jpg');
    padding-top: 20px;
    padding-bottom: 100px;
    background-repeat: no-repeat;
    background-attachment: fixed;
}
.opasni{
    background-color: rgba(103, 23, 9, 0.768);
    color: white;
}
.drzave{
    background-color: rgb(44, 145, 189);
    color: white;
}
.dugme{
    background-color: brown;
    color: white;
}
.polje{
    border: solid black 0.5px;
    width: 1cm;
    text-align: center;
}
</style>