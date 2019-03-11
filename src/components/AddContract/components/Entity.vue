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
                activeClass: 'active'
            }
        },
        methods: {
            select() {
	            this.$store.commit("selectEntity",this.entity)
                this.call(this.entity.legalEntityID)
                this.isActive = !this.isActive
            }
        }
    }
</script>
