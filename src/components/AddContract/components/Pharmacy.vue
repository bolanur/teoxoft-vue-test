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
        props: ['pharma','call'],
        data() {
            return {
                isActive: false,
                activeClass: 'active',
            }
        },
        methods: {
            select() {
                this.isActive = !this.isActive
	            if(!this.isActive)
	            this.call(this.pharma.pharmaID)
	            else
		        this.call(this.pharma)
            }
        }
    }
</script>
