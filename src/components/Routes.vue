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
                <div class="bus-list" v-if="fullRoute">
                    <el-menu-item-group v-for="(item, index) in fullRoute" :key="index">
                        <el-menu-item :index="index.toString()">
                            <b>{{item.origin}}</b> to
                            <b>{{item.destination}}</b>
                        </el-menu-item>
                    </el-menu-item-group>
                </div>
                <!-- <el-menu class="el-menu-vertical-demo">
                    <template v-for="(el,i) in fullRoute">
                        <el-menu-item index="i" :key="i">
                            <span>
                                <b>{{el.origin}}</b> to
                                <b>{{el.destination}}</b>
                            </span>
                        </el-menu-item>
                    </template>
                </el-menu> -->
                <!-- <el-menu-item index="3" disabled>
                    <i class="el-icon-document"></i>
                    <span>Navigator Three</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span>Navigator Four</span>
                </el-menu-item> -->
            </el-menu>
        </el-col>
    </el-row>
    <!-- <el-row class="tac">
        <el-col>
            <h5>Bus Routes</h5>
            <el-input placeholder="Search a bus route" v-model="search"></el-input>
            <el-menu class="el-menu-vertical-demo">
                <template v-for="(item, index) in filteredRoutes">
                    <el-menu-item index="index" @click="select(item)" :key="index">
                        <span>{{item.route}}</span>
                    </el-menu-item>
                </template>
            </el-menu>
            <template v-if="currentRoute">
                <h5>Directions for route: {{currentRoute}}</h5>
                <el-menu class="el-menu-vertical-demo">
                    <template v-for="(el,i) in fullRoute">
                        <el-menu-item index="i" :key="i">
                            <span>
                                <b>{{el.origin}}</b> to
                                <b>{{el.destination}}</b>
                            </span>
                        </el-menu-item>
                    </template>
                </el-menu>
            </template>
        </el-col>
    </el-row> -->
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
        }
    },
    created() {
        this.$store.dispatch("getRouteList");
    }
};
</script>


<style scoped lang="scss">
.bus-list {
    max-height: 250px;
    overflow-y: auto;
}
</style>