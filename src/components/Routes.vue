<template>
  <div class="">
    routetststst

  <ul>
    <li v-for="item in routeList" :key="item.route">
      {{item.route}}
    </li>
  </ul>

  </div>
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
      console.log(res);
      this.routeList = res;
    });
    // .cacth(err => console.log(err));
  }
};
</script>


<style lang="scss">
</style>