<template>
    <div>
        <galerija></galerija>
        <statistika></statistika>
        <tabela></tabela>
    </div>    
</template>
<script>
import Mapa from './Mapa.vue'
import Galerija from './Galerija.vue'
import Pretraga from './Pretraga.vue'
import Tabela from './Tabela.vue'
import Statistika from './Statistika.vue'

export default {
    components:{
        statistika:Statistika,
        galerija:Galerija,
        tabela:Tabela
    },
    
    created(){
        setTimeout(() => {
                this.odrediParametre();        
        }, 1000);
        console.log(this.$store.state.forma.koordinate);
        console.log(this.$store.state.forma.koordinateSrbija);
    
    }
}
</script>
<style scoped>

</style>
