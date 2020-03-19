<template>
    <div class="vest">
        <a target="_blank" :href="vest.url">{{vest.naslov}}</a>
    </div>    
</template>
<script>
export default {
    props:['vest']
}
</script>
<style scoped>
.vest{
    background: white;
    box-shadow: 7px 7px 8px #888888;
    margin: 10px;
    padding: 5px;
    border-radius: 5px;
}
</style>