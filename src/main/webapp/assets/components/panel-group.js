define(function () {
    return {
        render(h) {
            return h('div', {
                attrs:{

                }
            },'hello')
        },
        data() {
            return {}
        },
        components: {},
        props: {},
        computed: {},
        methods: {},
        mounted() {
            console.log(this.$el.clientWidth,'Mount')
        },
        beforeMount(){
            console.log(this.$el,'beforeMount')
        },
        created(){
            console.log(this.$el,12312)
        }
    }
})