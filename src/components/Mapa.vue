<template>
  <div>
    <l-map v-if="$store.state.forma.koordinate!=null && $store.state.forma.koordinateSrbija==null" :zoom="3" :center="$store.state.forma.koordinate">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker  :lat-lng="$store.state.forma.koordinate" :icon="iconOstali" :visible="true"></l-marker>
      <!-- <l-marker :lat-lng="pocetna" @click="removeMarker(index)" :icon="iconOstali"></l-marker>  -->
    </l-map>
    <l-map v-if="$store.state.forma.koordinate==null && $store.state.forma.koordinateSrbija!=null" :zoom="6" :center="[44,20]">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker v-for="i in $store.state.forma.izabrani" :lat-lng="[i['koordinate'][0],i['koordinate'][1]]" title="i['naziv']" :icon="iconOstali" :visible="true">
      </l-marker>
      <!-- <l-marker :lat-lng="pocetna" @click="removeMarker(index)" :icon="iconOstali"></l-marker>  -->
    </l-map>
    <!-- <div v-else>
        <h2>Selektujte drzavu</h2>
    </div> -->
    <!-- <l-map v-else :zoom="10" :center="center">
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
    </l-map> -->
  </div>
</template>
<script>
import { LMap, LTileLayer, LMarker} from "vue2-leaflet";
export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data() {
    return {
      zoom: 2,
      marker:L.latLng(44.8198114,20.4657058),
      pocetna: null,
      iconTrenutna: L.icon({
        iconUrl: "src/assets/trenutnaIcon.png",
        shadowUrl: '',
        iconSize: [38, 40],
      }),
      iconOstali: L.icon({
        iconUrl: "src/assets/markerIcon.png",
        shadowUrl: '',
        iconSize: [38, 40],
      }),
      center: L.latLng(44.8198114,20.4657058),
      suppressMarkers: true,
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    };
  }
};
</script>
<style scoped>

.trenutnaLokacija {
  background-image: url("../assets/logo.png");
}
.locateButton{
  background-color: #b3a737;
  color: white;
  border: transparent;
}
</style>