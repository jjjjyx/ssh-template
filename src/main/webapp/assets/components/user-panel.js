define(function () {
    return {
        template:`
<div class="user-panel ">
    <a class="user-avatar">
        <img :src="root+'/assets/img/1.png'" alt="">
    </a>
    <div class="user-info">
        <p class="user-name">admin</p>
        <a class="user-edit"><i class="am-icon-circle am-text-success"></i>  Online</a>
    </div>
</div>`,
        // render(h) {
        //     return h('div', 'hello')
        // },
        data() {
            return {
                root:config.remote.root
            }
        },
        components:{},
        props: {},
        computed: {},
        methods: {},
        mounted() {
        }
    }
})