<template>
  
    <el-row class="tac">
      <el-col >
        <h5>Bus Routes</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo">
          <template  index="index" @click="select(index)" v-for="(item, index) in routeList" >
            <el-menu-item :key="index">
              <span>{{item.route}}</span> 
            </el-menu-item >        
          </template>
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
  methods: {
    select: function(index) {
      console.log(this.routeList[index]);
    }
  },
  mounted() {
    this.$store
      .dispatch("getRouteList")
      .then(res => {
        this.routeList = res;
      })
      .cacth(err => console.log(err));
  }
};
</script>


<style scoped lang="scss">
.el-menu-vertical-demo {
  height: 400px;
}
</style>