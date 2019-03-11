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
				<datepicker
							v-model="startDate"
				            placeholder="Select Date"
							calendar-class="calendar"
				            :format="DatePickerFormat"
				            :disabledDates="disabledDates">
				</datepicker>
			</div>
			<div class=""><p>Contracat End Date</p></div>
			<div class="">
				<p>Lacation</p>
				<input v-model="location" type="text">
			</div>
			<div class="">
				<p>Contractor Name</p>
				<input v-model="contractorName" type="text">
			</div>
		</form>
		<router-link  to="/contract/select-pharmacies/">Back</router-link><br>
		<router-link to="/contract/result">result</router-link>
	</section>


</template>

<script>
    import Datepicker from 'vuejs-datepicker';

    export default {

        components: {
            Datepicker
        },
        updated(){
	        console.log(this.$data)
        },
	    data(){
                return{
                servAgr:'',
	            startDate:'',
	            endDate:'',
	            location:'',
	            contractorName:'',
                contractType:'',
                DatePickerFormat: 'dd/MM/yyyy',
                disabledDates: {
                    to: new Date(Date.now() - 8640000)
                }
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
	
	/*
		option{
			font-weight: normal;
			display: block;
			white-space: pre;
			min-height: 1.2em;
			padding: 0px 2px 1px;
		}*/
</style>