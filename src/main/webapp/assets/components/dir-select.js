define(['js/api'], function (api) {

    function ls(dirs) {
    // {
    //         "Cache-Control":"max-age=3600"
    //     }
        return api.nget(`${config.remote.root}/admin/source!ls`, {dirs})
    }

    return {
        template: `
<div>
    <el-select @change="change" placeholder="请选择" style="width: 70%" :loading="loading" v-model="value" value-key="relativize" :size="size" :multiple="multiple">
        <el-option-group v-for="(v,k) in options" :key="k" :label="k">
          <el-option v-for="item in filterOption(v)" :key="item.name" :label="item.name" :value="item" :disabled="item.disabled">
            <slot name="option" :item="item">   
                <span>{{item.name}}</span>
                <span style="font-size: 10px; color: #a2a1a1; font-style: italic; ">{{item.relativize}}</span>
                <span class="am-badge am-badge-success" v-if="item.isImport" style="    font-size: 12px; line-height: 1 !important; float: right">已导入</span>
            </slot>
          </el-option>
        </el-option-group>
      </el-select>
      <slot></slot>
</div>
       `,
        data() {
            return {
                options:{},
                v:'',
                loading:false
            }
        },
        components: {},
        props: {
            value:[Object,Array],
            showItem:{
                type:String,
                default: 'all' // only-import disabled-import
            },
            size:{
                type:String,
                default:''
            },
            multiple: Boolean,
        },
        computed: {

        },
        created() {
            this.loading = true;
            ls().then(({code, data}) => {
                if (code == 0) {
                    let __ = {};
                    data.forEach((item)=>{
                        item.disabled = false;
                        __[item.source] = __[item.source] || [];
                        __[item.source].push(item)
                    })
                    this.options = __;
                    this.loading = false;

                }
            })
        },
        methods: {
            filterOption(v){
                switch (this.showItem) {
                    case 'all':
                        return v;
                        break;
                    case 'only-import':

                        return v.filter(item=>item.isImport);
                    case 'disabled-import':
                        v.forEach(item=>{
                            if(item.isImport) item.disabled = true;
                        });
                        return v;
                    default:
                        return v;
                }
            },
            change(obj){
                this.$emit('input',obj)
            }
        },
        mounted() {
        },
    }
})