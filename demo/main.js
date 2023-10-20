import App from './App'
import store from './store'
import Vue from 'vue'
import uView from '@/uni_modules/uview-ui'
Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'
Vue.use(uView)
const app = new Vue({
    ...App,
	 store
})
app.$mount()