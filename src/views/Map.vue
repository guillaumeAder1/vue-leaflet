<template>
    <div class="map-container">
        <el-container>
            <!-- Side nav list -->
            <el-aside width="350px">
                <BusRoutes/>
            </el-aside>
            <!-- Map viewer Middle area -->
            <el-main>
                <MapViewer/>
            </el-main>
        </el-container>
        <!-- Notification component -->
        <Notification/>
    </div>
</template>

<script>
// leaflet basemaps : https://leaflet-extras.github.io/leaflet-providers/preview/
import MapViewer from "@/components/MapViewer.vue";
import BusRoutes from "@/components/Routes.vue";
import "leaflet/dist/leaflet.css";
import Notification from "@/components/Notification";

// hack to fix marker icon not displayed
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

export default {
    components: {
        MapViewer,
        BusRoutes,
        Notification
    }
};
</script>


<style scoped lang="scss">
.el-container {
    height: 100%;
}
.el-main {
    padding: 0;
    height: 100%;
}
.el-aside {
    height: 100%;
}
</style>