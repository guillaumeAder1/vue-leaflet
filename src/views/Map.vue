<template>
  <div class="map-container">
    <el-container>
      <el-aside>
        <Routes/>
      </el-aside>
      <el-main>
        <MapViewer/>
      </el-main>
    </el-container>
    <!-- NOTIF COMPONENT -->
    <Notification/>
  </div>
</template>

<script>
import MapViewer from "@/components/MapViewer.vue";
import Routes from "@/components/Routes.vue";
import "leaflet/dist/leaflet.css";
import Notification from "@/components/Notification.vue";

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
        Routes,
        Notification
    }
};
</script>


<style scoped lang="scss">
.el-main {
    padding: 0;
}
.el-aside {
    height: 450px;
}
</style>