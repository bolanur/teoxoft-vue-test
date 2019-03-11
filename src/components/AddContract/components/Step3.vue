<template>
	<section>
		<h1>3. Enter Contact Terms</h1>
		<form action="">
			<div class="">
				<p class="input-name">Contact Type</p>
				<select id="contract-type" v-model="contractType">
					<option value="Charter">Charter</option>
					<option value="Order">Order</option>
					<option value="Proxy">Proxy</option>
					<option value="Certificate">Certificate</option>
				</select>
			</div>
			<div class="">
				<p>Service Agreement</p>
				<input v-model="servAgr" type="text">
			</div>
			<div class=""><p>Contract Start Date</p>
				<div>
					<date-picker v-model="startDate" :first-day-of-week="1" :lang="lang"
					></date-picker>
				</div>
			</div>
			<div class=""><p>Contracat End Date</p>
				<date-picker v-model="endDate" :first-day-of-week="1" :lang="lang"
				             :not-before="disabled"></date-picker>
			</div>
			<div class="">
				<p>Lacation</p>
				<input v-model="location" type="text">
			</div>
			<div class="">
				<p>Contractor Name</p>
				<input v-model="contractorName" type="text">
			</div>
		</form>
		<div class="button_wrapper">
			<div class="button" @click="back">Back</div>
			<div @click="addToStore" class="button"  v-bind:class="{ lock: locker}" >result</div>
		</div>
	</section>


</template>

<script>
	import DatePicker from 'vue2-datepicker'

	export default {

		components: {
			DatePicker
		},
		computed: {
			locker() {
				return this.disabled && this.servAgr && this.startDate && this.endDate && this.location && this.contractorName && this.contractType ? false : true
			}
		},
		watch: {
			startDate() {
				this.disabled = this.startDate
				this.endDate = ''
			}
		},
		data() {
			return {
				disabled: '',
				servAgr: '',
				startDate: '',
				endDate: '',
				location: '',
				contractorName: '',
				contractType: '',
				lang: {
					days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
					months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
					pickers: ['next 7 days', 'next 30 days', 'previous 7 days', 'previous 30 days'],
					placeholder: {
						date: 'Select Date',
						dateRange: 'Select Date Range'
					}
				}
			}
		},
		methods: {
			addToStore() {
				let form = {
					location:this.location,
					serviceAgreement: this.servAgr,
					startDate: this.startDate,
					endDate: this.endDate,
					contractorName: this.contractorName,
					contractType: this.contractType
				}
				this.$store.commit("addForm", form)
				this.$router.push("/add-contract/step4/")
			},
			back(){
				this.$router.go(-1)
			}
			
		},
		name: "Step3"
	}
</script>

<style scoped>
	
	
	.input-name {
		display: inline;
		padding-right: 20px;
	}
	
	select {
		display: inline-block;
		left: 2px;
		top: 0;
		height: 31px;
	}
	

</style>
