import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/home'
import clips from '@/pages/clips'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'home',
			component: home
    },
		{
			path: '/clips',
			name: 'clips',
			component: clips
		}
  ]
})
