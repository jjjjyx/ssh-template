define(['js/api'],function (api) {
    return {
        data() {
            return {}
        },
        components: {},
        props: {},
        computed: {},
        methods: {
            // 退出登录
            handleCommand(command){
                if(typeof( this[command])=="function"){
                    this[command]()
                }

            },
            out(){
                api.nget(`../sign!out`);
            }
        },
        mounted() {
        },
    }
})