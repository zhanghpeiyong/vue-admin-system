module.exports = {
    //baseUrl: './',
    //assetsDir: 'static',
    //productionSourceMap: false,
    // devServer: {
    //     proxy: {
    //         '/api':{
    //             target:'http://jsonplaceholder.typicode.com',
    //             changeOrigin:true,
    //             pathRewrite:{
    //                 '/api':''
    //             }
    //         }
    //     }
    // }
    publicPath: './',
    devServer:{
        proxy:"http://demo.com"
    }
}
