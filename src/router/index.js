import Vue from "vue";
import Router from "vue-router";
import home from "@/pages/home";
import resume from "@/pages/resume";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "home",
			component: home
    },
		{
			path: "/resume",
			name: "resume",
			component: resume
		}
  ]
});
