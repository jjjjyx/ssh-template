define(['vue','js/dom','js/clickoutside'], function (Vue,{ once, on, off },clickoutside) {


    Vue.directive('context', {
        bind(el, binding, vnode) {
            let reference = vnode.context.$refs[binding.arg].$refs.reference
            if(reference) {
                if(!(reference instanceof Array)) {
                    vnode.context.$refs[binding.arg].$refs.reference = [reference]
                }
                vnode.context.$refs[binding.arg].$refs.reference.push(el)
            }else {
                vnode.context.$refs[binding.arg].$refs.reference = el;
            }
            vnode.context.$refs[binding.arg].bindEvent(el, binding);
            // on
            // console.log(binding)
        }
    });
    return {
        template: `
    <ul class="contextmenu list" id="contextmenu" :style="position" v-show="visible" v-clickoutside="hide" @contextmenu.prevent >
       <slot ></slot>
    </ul>
`,
        data() {
            return {
                x:0,
                y:0,
                visible:false,
                source:null
            }
        },
        directives:{
            clickoutside
        },
        components: {},
        props: {
            target: null,
        },
        computed: {
            position(){
                return {
                    left: `${this.x}px`,
                    top: `${this.y}px`
                }
            }
        },
        methods: {
            bindEvent(el,binding){
                // console.log(el)
                on(el,'contextmenu',(e)=>{
                    this.source = binding.value;
                    this.contextShow(e);
                })
            },
            unBindEvent(el){

            },
            contextShow(e){
                e.preventDefault();
                this.x = e.clientX
                this.y = e.clientY;
                this.visible = true;

            },
            hide(){
                this.visible = false
            }
        },
        watch:{
            target(){
                // console.log(this.target)
                this.bindEvents()
            }
        },
        beforeDestroy(){
            if(this.$el.parentNode == document.body) {
                document.body.removeChild(this.$el)
            }
        },
        mounted() {
            // this.bindEvents()
            if(this.$el.parentNode != document.body) {
                document.body.appendChild(this.$el)
            }
        },
    }
})