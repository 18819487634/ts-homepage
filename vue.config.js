const path = require('path')
const webpack = require('webpack')

// 引入happypack
const HappyPack = require('happypack')
const os = require('os');
const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length });

module.exports = {
  configureWebpack: {
    // 配置别名
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/'),
        'IMAGES': path.join(__dirname, 'src/assets/images/')
      }
    },
    plugins: [
      // vuex全局引入
      new webpack.ProvidePlugin({
        _: 'lodash',
        mapActions: ['vuex', 'mapActions'],
        mapMutations: ['vuex', 'mapMutations'],
        mapGetters: ['vuex', 'mapGetters'],
        mapState: ['vuex', 'mapState']
      }),
      // 配置happypack优化本地运行速度
      new HappyPack({
        id: 'babel',
        loaders:['babel-loader?cacheDirectory=true'],
        threadPool: happyThreadPool,
        verbose: true
      }),
      new HappyPack({
        id: 'vue',
        loaders: ['vue-loader'],
        threadPool: happyThreadPool,
        verbose: true
      })
    ]
  },
  // build输出路径
  outputDir: 'dist',
  // 是否使用eslint
  lintOnSave: true,
  // 设为false打包时不生成.map文件
  productionSourceMap: false,
  // 是否使用带有浏览器内编译器的完整构建版本
  runtimeCompiler: false,
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: []
    }
  },
  css: {
    // 将组件内的css提取到一个单独的css文件（只用在生产环境）
    extract: true,
    // 是否开启css source map
    sourceMap: false,
    // 为预处理器的loader传递自定义选项
    loaderOptions: {
      css: {},
      postcss: {
        plugins: [
          // autoprefixer补全css前缀(解决兼容性)
          require('autoprefixer')({
            overrideBrowserslist: ['Android >= 4.0', 'iOS >= 7']
          })
        ]
      }
    }
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    open: false,
    https: false,
    hotOnly: false,
    disableHostCheck: true
  }
}
