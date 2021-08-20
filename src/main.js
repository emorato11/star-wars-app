import Vue from 'vue'
import App from './App.vue'
import store from '@/store/store';

import { 
  BAlert, 
  BSidebar, 
  BPagination, 
  BSpinner, 
  BFormInput, 
  BButton, 
  BTable 
} from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//Import only used BootstrapVue components
Vue.component('b-table', BTable)
Vue.component('b-alert', BAlert)
Vue.component('b-pagination', BPagination)
Vue.component('b-sidebar', BSidebar)
Vue.component('b-spinner', BSpinner)
Vue.component('b-form-input', BFormInput)
Vue.component('b-button', BButton)

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
