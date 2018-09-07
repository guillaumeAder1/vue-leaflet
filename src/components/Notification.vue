<template>
    <el-button plain>
        Closes automatically
    </el-button>
</template>

<script>
export default {
    computed: {},
    methods: {},
    created() {
        const h = this.$createElement;
        this.$notify({
            title: "Title",
            message: h("i", { style: "color: teal" }, "This is a reminder"),
            onClose: e => {
                console.log(e);
            }
        });
    }
};
</script>

