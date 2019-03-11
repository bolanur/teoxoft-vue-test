<template>
	<div id="app">
		<div class="top_line">
			<div class="welcome">
				<p><span class="icon icon_user"></span> Welcome, <a class ="no_decor" href="#" id="name">Anil Tumati</a></p>
				<p><span class="icon icon_logout"></span> <a class ="no_decor" href="#">Logout</a></p>
			</div>
		</div>
		<keep-alive><sidebar></sidebar></keep-alive>
		<router-view></router-view>
	</div>
</template>

<script>
	import Sidebar from './components/Sidebar/Sidebar.vue'

	export default {
		name: 'app',
		components: {
			Sidebar
		}
	}
</script>

<style lang="scss">
	@import "main.scss";
</style>
