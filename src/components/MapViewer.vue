<template>
    <l-map style="height:450px;" :zoom="zoom" :center="center">
        <l-tile-layer :url="url"></l-tile-layer>
        <l-marker :lat-lng="marker"></l-marker>
        <!-- <template v-if="getError">
            <Notification/>
        </template> -->
        <template v-for="(item, index) in stopList">
            <l-marker :key="index" :lat-lng="createLatLong(item.latitude, item.longitude)"></l-marker>
        </template>
    </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
// import Notification from "./Notification";
export default {
    props: ["height"],
    components: {
        LMap,
        LTileLayer,
        LMarker
        // Notification
    },
    methods: {
        createLatLong: function(lat, long) {
            return L.latLng(lat, long);
        }
    },
    computed: {
        stopList() {
            return this.$store.getters.stopList;
        },
        getError() {
            return this.$store.getters.errorMessage;
        }
    },
    data() {
        return {
            zoom: 13,
            center: L.latLng(53.34, -6.26),
            url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
            marker: L.latLng(53.34, -6.26)
        };
    },
    mounted() {
        console.log(this.$refs);
    }
};
</script>

<style>
</style>