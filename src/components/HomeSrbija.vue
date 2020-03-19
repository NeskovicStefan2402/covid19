<template>
    <div class="home row">
        <div class="col-3">
            <vest v-for="i in $store.state.forma.domaceVesti" :vest='i'></vest>
        </div>
        <div class="col-9">
            <mapa></mapa>
        </div>
    </div>
</template>
<script>
import Mapa from './Mapa'
import Vest from './Vest'

export default {
    components:{
        vest:Vest,
        mapa:Mapa
    }
}
</script>
<style scoped>
.home{
    background-image: url('../assets/statistikaBack.jpg');
    height: 100vh;
}
</style>