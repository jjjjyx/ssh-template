define(function () {
    return {
        template:`
<li :class="{devider:!label&&!$slots.default}" @click="click">

    <slot v-if="$slots.default"></slot>
    <template v-else>
        {{label}}
        <div class="extend" v-if="shortcut">{{shortcut}}</div>
    </template>
</li>   
        `,
        data() {
            return {}
        },
        components: {},
        props: {
            label:{
                type:String,
                default:()=>''

            },
            shortcut:{
                type:String,
            }
        },
        computed: {},
        methods: {
            click(){
                this.$emit('click',this.$parent.source);
                this.$parent.hide()
            }
        },
        mounted() {
        },
    }
})