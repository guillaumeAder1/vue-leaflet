<template>
  <div class="map-container">
           
      
    <el-container >
        <el-aside width="200px">
          <!-- {{$store.state.msg}} -->
          <Routes/>
        </el-aside>
        <el-main width="450px">
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


<style lang="scss">
</style>