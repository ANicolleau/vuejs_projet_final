<template>
	<div class="row mt-3">
		<FilterPanel/>
	</div>
	<div class="row mt-3">
		<div class="col bg-dark p-5">
			<div class="row mt-3">
				<BeerDisplay/>
			</div>
			<div class="row mt-3">
				<BeerDisplay/>
			</div>
		</div>
	</div>
</template>

<script>
import BeerDisplay from "@/components/BeerDisplay";
import FilterPanel from "@/components/FilterPanel";
export default {
	name: 'App',
	components: {
		FilterPanel,
		BeerDisplay
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
