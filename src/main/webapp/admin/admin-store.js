define(['js/api', 'vue'], function (api, Vue) {
    class Store {
        constructor (initialState = {}) {
            this.states = {
                user:null,
            }
            
            for (let prop in initialState) {
                if (initialState.hasOwnProperty(prop) &&
                    this.states.hasOwnProperty(prop)) {
                    this.states[prop] = initialState[prop]
                }
            }
        }
        
        commit (name, ...args) {
            const mutations = this.mutations
            if (mutations[name]) {
                mutations[name].apply(this, [this.states].concat(args))
            } else {
                throw new Error(`Action not found: ${name}`)
            }
        }
        
        setStatus (status) {
            this.states._rollbackStatus = this.states.status
            this.states.status = status
        }
    }
    
    Store.prototype.mutations = {
    
    }
    
    Store.prototype.getter = {}
    
    let c = Object.assign({}, window.__INIT)
    const store = new Store(c)
    // 获取一些初始参数
    // 简单粗暴的将初始参数放在window 里面 在页面生成的时候由jsp填充
    return store
})