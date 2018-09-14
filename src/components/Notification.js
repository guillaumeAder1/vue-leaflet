
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            notif: null
        };
    },
    computed: {
        // plug to store computed value
        // and create data/props 'message'
        ...mapGetters({
            message: "errorMessage"
        })
    },
    watch: {
        // everytime message changes, display notif
        message() {
            this.createNotif(this.message);
        }
    },
    methods: {
        createNotif(msg) {
            const h = this.$createElement;
            this.$notify({
                title: "Alert",
                message: h("i", { style: "color: teal" }, msg),
                onClose: e => { }
            });
        }
    },
    render() {
        // defined render function or warning in console...

    }
};


