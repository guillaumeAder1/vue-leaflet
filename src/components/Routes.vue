<template>
    <el-row class="tac">
        <el-col>
            <el-menu default-active="2" class="el-menu-vertical-demo" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>Bus Routes</span>
                    </template>
                    <el-input placeholder="Search a bus route" v-model="search"></el-input>
                    <div class="bus-list">
                        <el-menu-item-group v-for="(item, index) in filteredRoutes" :key="index">
                            <el-menu-item @click="select(item)" :index="index.toString()">{{item.route}}</el-menu-item>
                        </el-menu-item-group>
                    </div>
                </el-submenu>
                <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span v-if="currentRoute">Directions for {{currentRoute}}</span>
                    <span v-else>No route available</span>
                </el-menu-item>
                <el-scrollbar wrap-class="list" wrap-style="color: red;" view-style="font-weight: bold;" view-class="view-box" :native="false">
                    <div class="bus-list" v-if="fullRoute">
                        <el-menu-item-group v-for="(item, index) in fullRoute" :key="index">
                            <el-menu-item :index="index.toString()" @click="selectDirection(index)">
                                <b>{{item.origin}}</b> to
                                <b>{{item.destination}}</b>
                            </el-menu-item>
                        </el-menu-item-group>
                    </div>
                </el-scrollbar>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            search: "",
            subRoutes: []
            // _routes: this.$store.getters.routeList
        };
    },
    computed: {
        // plug to store computed value
        // and create data/props 'message'
        ...mapGetters({
            currentRoute: "selectedRoute",
            fullRoute: "fullRouteResponse"
        }),
        routeList() {
            return this.$store.getters.routeList;
        },
        filteredRoutes() {
            if (!this.search) {
                return this.routeList;
            }
            const t =
                this.routeList &&
                this.routeList.filter(res => {
                    return res.route
                        .toLowerCase()
                        .match(this.search.toLowerCase());
                }, this);
            return t;
        }
    },
    methods: {
        select(item) {
            let { route, operator } = item;
            this.$store.dispatch("getRouteStops", { operator, routeid: route });
        },
        selectDirection(index) {
            console.log(index);
            this.$store.dispatch("getDirectionStops", { index });
        }
    },
    created() {
        this.$store.dispatch("getRouteList");
    }
};

// https://jsfiddle.net/chenfangxu/jfn5gzcw/
</script>


<style scoped lang="scss">
.bus-list {
    max-height: 250px;
    overflow-y: auto;
}
</style>