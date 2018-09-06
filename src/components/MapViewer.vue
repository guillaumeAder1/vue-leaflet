<template>
  <l-map style="height:450px;" :zoom="zoom" :center="center">
    <l-tile-layer :url="url"></l-tile-layer>
    <l-marker :lat-lng="marker"></l-marker>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
export default {
    props: ["height"],
    components: {
        LMap,
        LTileLayer,
        LMarker
    },
    data() {
        return {
            zoom: 13,
            center: L.latLng(47.41322, -1.219482),
            url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
            marker: L.latLng(47.41322, -1.219482)
        };
    },
    mounted() {
        console.log(this.$refs);
    }
};
</script>

<style>
</style>