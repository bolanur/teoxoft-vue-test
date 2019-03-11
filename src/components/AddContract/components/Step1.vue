<template>
	<section>
		<h1>1.Select Legal Entity</h1>
		<table>
			<tr>
				<th>Legal Entity</th>
				<th>Street</th>
				<th>City</th>
				<th>Country</th>
			</tr>
			<entity
					:call="clearActive"
					v-for="ent in entities"
					:entity="ent"
			></entity>
		</table>
		<router-link class="button" v-bind:class="{ lock: entActive===0}" to="/add-contract/step2/">Select Pharmacies</router-link>
	</section>
</template>

<script>
	import Entity from './Entity.vue'
	export default {
		name: "Step1",

		components: {
			Entity
		},
		data() {
			return {
				entActive: 0,
				entities: [],
				json: 'http://localhost:3000/legalentity'
			}
		},
		mounted() {
			this.$http.get(this.json).then(response=>{
				this.entities=response.body
			})
		},
		methods: {
			clearActive: function (activeID) {
				this.entActive = activeID;
				this.$children.forEach(function (ref) {
					ref.$data.isActive = false
				})

			}
		}
	}
</script>

