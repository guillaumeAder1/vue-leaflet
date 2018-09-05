<template>
  <div class="map-container">
           
      
    <el-container >
        <el-aside width="200px">Aside</el-aside>
        <el-main width="450px">
            <MapViewer/>
        </el-main>
    </el-container>
  </div>
</template>

<script>
import MapViewer from "@/components/MapViewer.vue";

export default {
  components: {
    MapViewer
  }
};
</script>


<style lang="scss">
// .el-container * {
//   background: #eee;
//   margin: 5px;
// }

.el-main {
  height: 500px;
}

// .map-container {
//   height: 100%;
//   margin: 0;
// }
</style>