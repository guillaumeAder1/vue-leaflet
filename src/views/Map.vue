<template>
  <div class="map-container">
           
      
    <el-container >
        <el-aside>
          <!-- {{$store.state.msg}} -->
          <Routes/>
        </el-aside>
        <el-main>
            <MapViewer/>
        </el-main>
    </el-container>
  </div>
</template>

<script>
import MapViewer from "@/components/MapViewer.vue";
import Routes from "@/components/Routes.vue";

export default {
  components: {
    MapViewer,
    Routes
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