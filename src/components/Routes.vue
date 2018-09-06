<template>
  <el-row class="tac">
    <el-col>
      <h5>Bus Routes</h5>
      <el-menu default-active="2" class="el-menu-vertical-demo">
        <template v-for="(item, index) in routeList">
          <el-menu-item index="index" @click="select(index)" :key="index">
            <span>{{item.route}}</span>
          </el-menu-item>
        </template>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
    // data() {
    //   return {
    //     routeList: null
    //   };
    // },
    computed: {
        routeList() {
            console.log(this.$store);
            return this.$store.getters.routeList;
        }
    },
    methods: {
        select: function(index) {
            let { route, operator } = this.$store.getters.routeList[index];
            this.$store.dispatch("getRouteStops", { operator, routeid: route });
        }
    },
    created() {
        // this.$store.dispatch("getRouteList").then(res => {
        //   this.routeList = res;
        // });
        this.$store.dispatch("getRouteList");
    }
};
</script>


<style scoped lang="scss">
.el-menu-vertical-demo {
    height: 400px;
}
</style>