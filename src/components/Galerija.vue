<template>
    <div id="carouselExampleIndicators" class="carousel slide slideGalerija" data-ride="carousel">
  <ol class="carousel-indicators" >
    <li id='0' data-slide-to="0" class="active" style="background-color:white;"></li>
    <li id='1' data-slide-to="1" style="background-color:white;"></li>
    <li id='2' data-slide-to="2" style="background-color:white;"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active" id="first" >
      <img class="d-block w-100 slideGalerija" src="../assets/slide1.jpg" height="100vh" width="100%">
    </div>
    <div class="carousel-item" id="second">
      <img class="d-block w-100 slideGalerija" src="../assets/slide2.jpg" height="100vh" width="100%">
    </div>
    <div class="carousel-item" id="third">
      <img class="d-block w-100 slideGalerija" src="../assets/slide3.jpg" height="100vh" width="100%">
    </div>
  </div>
  <!-- <a class="carousel-control-prev" @click="nazad" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" @click="napred" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a> -->
</div>
</template>
<script>
export default {
    data(){
        return{
            pozicija:0
        }
    },
    created(){
        setInterval(() => {
            this.napred();
        }, 7000);
    },
    methods:{
        napred(){
            if(this.pozicija==2){
                document.getElementById('2').classList.remove('active');
                document.getElementById('0').classList.add('active');
                document.getElementById('third').classList.remove('active');
                document.getElementById('first').classList.add('active');
                this.pozicija=0;
            }else if(this.pozicija==1){
                document.getElementById('1').classList.remove('active');
                document.getElementById('2').classList.add('active');
                document.getElementById('second').classList.remove('active');
                document.getElementById('third').classList.add('active');
                this.pozicija++;
            }else{
                document.getElementById('0').classList.remove('active');
                document.getElementById('1').classList.add('active');
                document.getElementById('first').classList.remove('active');
                document.getElementById('second').classList.add('active');
                this.pozicija++; 
            }
        },
        nazad(){
            if(this.pozicija==0){
                document.getElementById('0').classList.remove('active');
                document.getElementById('2').classList.add('active');
                this.pozicija=2;
            }else if(this.pozicija==1){
                document.getElementById('1').classList.remove('active');
                document.getElementById('0').classList.add('active');
                this.pozicija--;
            }else{
                document.getElementById('2').classList.remove('active');
                document.getElementById('1').classList.add('active');
                this.pozicija--; 
            }
        }
    }
}
</script>
<style scoped>
.slideGalerija{
  height: 100vh;
}
</style>