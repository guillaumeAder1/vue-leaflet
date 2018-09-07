<template>
    <el-row class="tac">
        <el-col>
            <h5>Bus Routes</h5>
            <input type="text" v-model="search" placeholder="filter" />
            <el-menu default-active="2" class="el-menu-vertical-demo">
                <template v-for="(item, index) in filteredRoutes">
                    <el-menu-item index="index" @click="select(item)" :key="index">
                        <span>{{item.route}}</span>
                    </el-menu-item>
                </template>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data() {
        return {
            search: "",
            allRoutes: []
            // _routes: this.$store.getters.routeList
        };
    },
    computed: {
        routeList: function() {
            return this.$store.getters.routeList;
        },
        filteredRoutes: function() {
            let t =
                this.routeList &&
                this.routeList.filter(res => {
                    res.route.toLowerCase().match(this.search.toLowerCase());
                });
            return t;
        }
    },
    methods: {
        select: function(item) {
            // console.log(this._routes);
            //let { route, operator } = this.$store.getters.routeList[index];
            let { route, operator } = item;
            this.$store.dispatch("getRouteStops", { operator, routeid: route });
        }
    },
    created() {
        this.$store.dispatch("getRouteList");
    }
};
</script>


<style scoped lang="scss">
.el-menu-vertical-demo {
    height: 400px;
}
</style>