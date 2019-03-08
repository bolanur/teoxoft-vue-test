<template>
	
	<aside class="sidebar">
		<div class="sidebar_btn home">
			<router-link class="no_decor" to="/dashboard">Dashboard</router-link>
		</div>
		<div class="sidebar_btn add_contract">
			<router-link class="no_decor" to="/contract/select-legal-entity">Add Contract</router-link>
		</div>
		<div class="sidebar_btn open_tasks">
			<router-link class="no_decor" to="/open-tasks">Open Tasks</router-link>
		</div>
	</aside>

</template>

<script>
	export default {
		name: "Sidebar"
	}
</script>

<style lang="scss" scoped>
	@import "sidebar";
</style>
