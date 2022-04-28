<template>
	<div class="row m-0 p-0 mt-3">
		<div class="col-12">
			<FilterPanel @filtersChange="updateFilters"/>
		</div>
	</div>
	<div class="row m-0 p-0 mt-3">
		<div class="col-12">
			<TheBeersPage :filtersFromHeader="filters"/>
		</div>
	</div>
</template>

<script>
import FilterPanel from "@/components/FilterPanel";
import TheBeersPage from "@/components/TheBeersPage";

export default {
	name: 'App',
	components: {
		TheBeersPage,
		FilterPanel,
	},
	data() {
		return {
			filters: {}
		}
	},
	methods: {
		updateFilters(filters) {
			this.filters = filters
		}
	}
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;

}
</style>
