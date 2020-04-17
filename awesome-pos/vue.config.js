module.exports = {
    devServer:{
        proxy:{
            '/':{
                target:'http://localhost:3006',
                pathRewrite:{
                    '/':''
                }
            }
        }
    },
    productionSourceMap: false,
    configureWebpack:{
        externals: {
            'vue': 'Vue',
            'vue-router': 'VueRouter',
            'element-ui': 'ELEMENT',
            'vue-lazyload':'VueLazyload',
            // 'echarts': 'echarts',
        }
    },
}