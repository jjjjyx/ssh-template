define(['js/dom','js/tools'],function ({ once, on, off }, utils) {
    const DRAG_MOVE_THRESHOLD = 4
    const directionAnti = {
        right: 'left',
        left: 'right',
        top: 'bottom',
        bottom: 'top'
    }
    return {
        template:`<div class="am-panel am-panel-default" :class="[className]" :style="domSize" v-if="visible">
    <div class="resize-handle-resizable " :class="[anti]" @mousedown="dragStart" v-if="autoSize"></div>
    <div class="am-panel-bd">
        <slot></slot>
    </div>
    <div class="am-panel-footer" v-if="$slots.footer">
        <slot name="footer"></slot>
    </div>
</div>`,
//         render(h){
//
//             return h('div')
//         },
        data() {
            return {
                startPosition: null,
                dragPosition: null,
                dom_size: this.size,
            }
        },
        props: {
            direction: {
                type: String,
                default: 'left'
            },
            autoSize:{
                type:Boolean,
                default:true
            },
            visible: {
                type: Boolean,
                default: true
            },
            size: {
                type: [Number,String],
                default: 280
            },
            maxSize: {
                type: Number,
                default: 400
            },
            minSize: {
                type: Number,
                default: 280
            }

        },
        computed: {
            className() {
                return this.direction
            },
            anti() {
                return directionAnti[this.direction]
            },
            domSize() {
                if(this.dom_size!='auto')
                    return {
                        [this.side]: `${this.dom_size}px`
                    }
            },
            side() {
                let s = 'height'
                if (this.direction == 'right' || this.direction == 'left') {
                    s = 'width'
                }
                return s
            },
            position() {
                if (this.direction == 'right' || this.direction == 'left') return "horizontal"
                else return 'vertical'
            }
        },
        methods: {
            _enterDragMode() {
                this._dragMode = true;
                return true;
            },
            /**
             *  p 是相对页面的位置
             *
             */
            pointFromPanel(p) {
                // this.$el
                let p2;
                let length;
                // console.log(this.$el.offsetLeft,p.x)
                switch (this.direction) {
                    case 'right':
                        length = this.$el.offsetLeft+this.dom_size-p.x
                        break;
                    case 'left':
                        length = p.x-this.$el.offsetLeft
                        break;
                    case 'top':
                        length = p.y-this.$el.offsetTop
                        break;
                    case 'buttom':
                        length = this.$el.offsetTop+this.dom_size-p.y
                        break;
                    default:
                        this.lenth = this.dom_size
                }
                return length
            },

            dragMove(e) {
                if (!this.startPosition) return;

                let position = utils.eventFromPoint(e, "page");

                // let movement = utils.getDistance(this.dragPosition || this.startPosition, position);
                this.dragPosition = position;
                if (!this._dragMode) {
                    // 判断拖放模式是否该启动
                    // console.log(this._dragPosition,this._startPosition)
                    if (utils.getDistance(this.dragPosition, this.startPosition) < DRAG_MOVE_THRESHOLD) {
                        return;
                    }

                    if (!this._enterDragMode()) {
                        return;
                    }
                }

                let length = this.pointFromPanel(this.dragPosition)

                if (length >= this.maxSize) {
                    return;
                }
                if (length <= this.minSize) {
                    return;
                }
                this.dom_size = length

                // this.dom_size+=movement;
                this.$emit('update:size', this.dom_size)
                // console.log(this.size)
                //
            },
            dragEnd() {
                this.startPosition = null;
                this.dragPosition = null;

                if (!this._dragMode) {
                    return;
                }

                this._dragMode = false;

                let el = document.querySelector('.workspace')
                off(el, 'mousemove', this.dragMove)
                off(el, 'mouseup', this.dragEnd)
            },
            dragStart(e) {
                e.preventDefault();
                this.startPosition = utils.eventFromPoint(e, "page");

                let el = document.querySelector('.workspace')
                on(el, 'mousemove', this.dragMove)
                on(el, 'mouseup', this.dragEnd)
            }
        }
    }
})
