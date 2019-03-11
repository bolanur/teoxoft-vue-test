<template>
	<tr v-on:click="select" :class="[isActive?activeClass:'']">
		<td><a>{{entity.legalEntityName}}</a></td>
		<td><a>{{`${entity.address1} ${entity.address2}`}}</a></td>
		<td><a>{{entity.city}}</a></td>
		<td><a>{{entity.country}}</a></td>
	</tr>

</template>

<script>
    export default {
        name: "Entity",
        props: ['entity','call'],
        data() {
            return {
                isActive: false,
                activeClass: 'active',
            }
        },
        methods: {
            select() {
                this.call(this.entity.legalEntityID)
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
