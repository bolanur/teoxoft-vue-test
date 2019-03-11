import Vue from 'vue'
import Vuex from 'vuex'
Vue.use (Vuex)

const store = new  Vuex.Store({
	state: {
		activeEntity:'',
		activePharmacies:'',
		formStore:''
	},
	mutations: {
		selectEntity(state, ae) {
			state.activeEntity=ae
		},
		selectPharmacies(state,aph){
			state.activePharmacies=aph
		},
		addForm(state,fd){
			state.formStore=fd
		}
	}
})

export default store
