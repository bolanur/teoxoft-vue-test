<template>
	<div id="app">
		<div class="top_line">
			<div class="welcome">
				<p>Welcome, <a class ='no_decor' href="#" id="name">Anil Tumati</a></p>
				<a href="#">Logout</a>
			</div>
		</div>
		<sidebar></sidebar>
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

<style>
	@import "main.scss";
</style>
