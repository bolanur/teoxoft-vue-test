<template>
	<section>
		<h1>4. Result</h1>
		<table>
			<tr>
				<th>Legal Entity</th>
				<th>Street</th>
				<th>City</th>
				<th>Country</th>
			</tr>
			<tr>
				<td><a>{{activeEntity.legalEntityName}}</a></td>
				<td><a>{{`${activeEntity.address1} ${activeEntity.address2}`}}</a></td>
				<td><a>{{activeEntity.city}}</a></td>
				<td><a>{{activeEntity.country}}</a></td>
			</tr>
		</table>
		<table>
			<tr>
				<th>Pharmacy</th>
				<th>Street</th>
				<th>City</th>
				<th>Country</th>
			</tr>
			<tr v-for="pharma in activePharma">
				<td><a>{{pharma.pharmaName}}</a></td>
				<td><a>{{pharma.address_1+" "+pharma.address_2}}</a></td>
				<td><a>{{pharma.city}}</a></td>
				<td><a>{{pharma.country}}</a></td>
			</tr>
		</table>
		<table>
			<tr>
				<th>Contract type</th>
				<td>{{formStore.contractType}}</td>
			</tr>
			<tr>
				<th>Service Agreement</th>
				<td>{{formStore.serviceAgreement}}</td>
			</tr>
			<tr>
				<th>Contract Start Date</th>
				<td>{{formStore.startDate}}</td>
			</tr>
			<tr>
				<th>Contract end Date</th>
				<td>{{formStore.endDate}}</td>
			</tr>
			<tr>
				<th>Location</th>
				<td></td>
			</tr>
			<tr>
				<th>Contractor name</th>
				<td>{{formStore.contractorName}}</td>
			</tr>
		</table>
		<div class="button" @click="back">Back</div>
	</section>
</template>

<script>
	export default {
		name: "Step4",
		data() {
			return {
				activeEntity: this.$store.state.activeEntity,
				activePharma: this.$store.state.activePharmacies,
				formStore: this.$store.state.formStore
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped>

</style>
