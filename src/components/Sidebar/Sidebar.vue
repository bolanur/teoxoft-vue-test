<template>
	<aside class="sidebar">
		<router-link
				v-for="(btn, index) in buttons"
				:to="btn.link"
				:class="{'router-link-exact-active':btn.active}"
				@click.native="setActive(btn)"
			>
			<icon-set :index="index"/>
			{{btn.name}}
		</router-link>
		<!--</div>-->
	</aside>
</template>

<script>
	import IconSet from './icons/components/HomeICon'
	export default {
		name: "Sidebar",
		components: {
			IconSet
		},
		data() {
			return {
				buttons: [
					{
						name: 'Dashboard',
						link: "/dashboard",
						active:false
					},
					{
						name: 'Add Contract',
						link: "/add-contract/step1",
						active:false
					},
					{
						name: 'Open Tasks',
						link: "/open-tasks",
						active:false
					}
				]

			}
		},
		methods:{
			setActive(active){
				this.buttons.forEach(btn=>{
					btn.active=false
				})
				active.active=true
			}
		}
	}
</script>

<style lang="scss" scoped>
	@import "sidebar";
</style>
