const mdPlugin = require('vite-plugin-markdown')
import { Mode } from 'vite-plugin-markdown'


console.log(Mode)
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