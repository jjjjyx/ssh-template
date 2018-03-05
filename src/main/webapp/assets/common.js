require.config({
    baseUrl: config.remote.root ? config.remote.root: '/',
    appDir: './sds',
    paths: {
        lib:"assets/lib",
        js:"assets/js",
        components:'assets/components',
        vue: 'assets/lib/vue.min',
        VueRouter: 'assets/lib/vue-router.min',
        validator:'assets/lib/vue-validator.min',
        ELEMENT: 'assets/lib/element-ui',
        dom:'assets/lib/dom'
    }
});
