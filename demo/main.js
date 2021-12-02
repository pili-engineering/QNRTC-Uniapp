import App from './App'
import store from './store'
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'
const app = new Vue({
    ...App,
	 store
})
app.$mount()