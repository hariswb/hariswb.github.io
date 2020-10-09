const mdPlugin = require('vite-plugin-markdown')


module.exports = {
	assetsDir:"",
	runtimeCompiler:true,
	resolve:{
		alias:"vue/dist/vue.esm-bundler.js"
	},
	plugins: [
		mdPlugin({
			mode:'vue'
		}),
	]
}