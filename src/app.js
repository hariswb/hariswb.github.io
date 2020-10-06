import { createApp } from "vue";

const welcomeBanner = {
	data(){
		return {
			message: "Hellooooyy"
		}
	}
}

const app = createApp(welcomeBanner)

console.log("oi")

app.mount('#app')
