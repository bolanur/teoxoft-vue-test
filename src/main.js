import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import store from './store/index'
import OpenTasks from './components/OpenTasks/OpenTasks'
import Dashboard from './components/Dashboard/Dashboard'
import AddContract from './components/AddContract/AddContract'
import Step1 from "@/components/AddContract/components/Step1";
import Step2 from "@/components/AddContract/components/Step2";
import Step3 from "@/components/AddContract/components/Step3";
import Step4 from "@/components/AddContract/components/Step4";
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.config.productionTip = false

/*
const routes = [
	{path: '/open-tasks', component: OpenTasks},
	{path: '/dashboard', component: Dashboard},
	{path: '/add-contract', component: AddContract}
]
/*const router = new VueRouter({
	routes
})*/
const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/open-tasks',
			components: {
				default: OpenTasks,
			}
		},
		{
			path: '/dashboard',
			components: {
				default: Dashboard
			}
		},
		{
			path: '/add-contract',
			component: AddContract,
			children: [
				{
					path: 'step1',
					component: Step1
				},
				{
					path: 'step2',
					component: Step2
				},
				{
					path: 'step3',
					component: Step3
				},
				{
					path: 'step4',
					component: Step4
				},
			]
		}
	]
})


new Vue({
	store,
	router,
	render: h => h(App),
}).$mount('#app')
