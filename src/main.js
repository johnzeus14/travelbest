import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

import VueSVGIcon from 'vue-svgicon'


// import uikit components
import 'uikit/dist/js/uikit.js'
import './theme/theme.less'


//icons
 //import './custom-icons'



Vue.use(VueSVGIcon)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
