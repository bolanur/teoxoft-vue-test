<template>
	<tr v-on:click="select" :class="[isActive?activeClass:'']">
		<td><a>{{pharma.pharmaName}}</a></td>
		<td><a>{{pharma.address_1+" "+pharma.address_2}}</a></td>
		<td><a>{{pharma.city}}</a></td>
		<td><a>{{pharma.pharmaID}}</a></td>
	</tr>
</template>

<script>
    export default {
        name: "Pharmacy",
        props: ['pharma', 'entActive','call'],
        data() {
            return {
                isActive: false,
                activeClass: 'active',
            }
        },
        methods: {
            select() {
                this.call(this.pharma.pharmaID)
                this.isActive = !this.isActive
            }
        }
    }
</script>

<style scoped>
	.active {
		background-color: #99d448;
		color: white;
	}
	
	a {
		padding-right: 100px;
		display: block;
		text-align: left;
		height: 100%;
	}
	
	tr {
		cursor: pointer;
		box-sizing: border-box;
		color: #415a6c;
		border: 1px solid #eeeeee;
	}
</style>