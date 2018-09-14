<template>
    <el-button plain>
        Closes automatically {{message}}
    </el-button>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            notif: null
            //message: null
        };
    },
    computed: {
        ...mapGetters({
            message: "errorMessage"
        })
    },
    watch: {
        message() {
            console.log("changed", this.message);
            this.createNotif(this.message);
        }
    },
    methods: {
        createNotif(msg) {
            const h = this.$createElement;
            this.$notify({
                title: "Alert",
                message: h("i", { style: "color: teal" }, msg),
                onClose: e => {}
            });
        }
    },
    created() {
        // const h = this.$createElement;
        // this.$notify({
        //     title: "Alert",
        //     message: h("i", { style: "color: teal" }, this.message),
        //     onClose: e => {}
        // });
    }
};
</script>

