<template>
  
    <el-row class="tac">
      <el-col >
        <h5>Bus Routes</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo">
          <el-menu-item index="item.route" v-for="item in routeList" :key="item.route">
            <span>{{item.route}}</span> 
          </el-menu-item >        
        </el-menu>
      </el-col>
    </el-row>
  
</template>

<script>
export default {
  data() {
    return {
      routeList: null
    };
  },
  mounted() {
    this.$store.dispatch("getRouteList").then(res => {
      this.routeList = res;
    });
    // .cacth(err => console.log(err));
  }
};
</script>


<style scoped lang="scss">
.el-menu-vertical-demo {
  height: 400px;
}
</style>