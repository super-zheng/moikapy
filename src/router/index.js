import Vue from "vue";
import Router from "vue-router";
import home from "@/components/home/home";
import resume from "@/components/resume/resume";

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
