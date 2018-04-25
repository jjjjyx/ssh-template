!+(function () {
    define(function (require) {
        let api = require('js/api')
        let Vue = require('vue')
        //let VueRouter = require('js/lib/vue-router.min')
        //let validator = require('js/lib/vue-validator.min')
        let ELEMENT = require('ELEMENT')
        //let headerFrom = require("js/header-from")
        //let cookie = require('js/lib/js.cookie')
        Vue.use(ELEMENT)
        const app = new Vue({
            //mixins:[headerFrom],
            el: '#app',
            name: 'index',
            data: function () {
                return {
                    name: 'hello world!',
                    dialogVisible: false,
                    imgSrc:'',
                }
            },
            components: {},
            computed: {},
            methods: {

            },
            created () {
            },
            mounted () {
            }
        })
    })
})();