import Vue from 'vue'
require('./bootstrap')
import './assets/css/styles.css'

import router from './router'
import App from './App.vue'
import store from './store'
import * as types from './store/mutation-types'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faTwitterSquare, faLinkedin, faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add([
  faGithubSquare,
  faTwitterSquare,
  faLinkedin,
  faFacebookSquare,
  faEye
])

Vue.component('font-awesome-icon', FontAwesomeIcon)

new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App),
	created() {
		this.$store.commit(types.RESET_LOADING_PROGRESS)
		this.$store.dispatch('getAllCategories')
    this.$store.dispatch('getAllPages')
    this.$store.dispatch('getAllProjects')
	}
})
