<template>
	<section>
		<h1>2.Select Pharmacies <span>for Farmalayn LLC</span></h1>
		<table>
			<tr>
				<th>Pharmacy</th>
				<th>Street</th>
				<th>City</th>
				<th>Country</th>
			</tr>
			<pharmacy
					:call="addActive"
					v-for="ph in pharmacies"
					:pharma="ph"
			></pharmacy>
		</table>
		<div class="button_wrapper">
			<div class="button" @click="back">Back</div>
			<router-link @click.native="addToStore" class="button" v-bind:class="{ lock: activePharma.length===0}" to="/add-contract/step3/">Enter Contact Terms
			</router-link>
		</div>
	</section>
</template>

<script>
	import Pharmacy from './Pharmacy'

	export default {
		name: "Step2",
		components: {Pharmacy},
		data() {
			return {
				activePharma: [],
				pharmacies: [],
				json: 'http://localhost:3000/pharmacy'
			}
		},
		mounted() {
			this.$http.get(this.json).then(response => {
				response.body.forEach(pharmacy => {
					if (pharmacy.legalEntityID === this.$store.state.activeEntity.legalEntityID)
						this.pharmacies.push(pharmacy)
				})
			})

		},
		methods: {
			addActive(data) {
				if (typeof (data) != 'number')
					this.activePharma.push(data)
				else
					this.activePharma.forEach((ap, index) => {
						if (ap.pharmaID === data) {
							this.activePharma.splice(index, 1)
						}
					})
			},
			addToStore() {
				this.$store.commit("selectPharmacies", this.activePharma)
			},
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

