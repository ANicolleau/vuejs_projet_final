<template>
	<div class="row mt-3">
		<FilterPanel/>
	</div>
	<div class="row mt-3">
		<div class="col bg-dark p-5">
			<TheBeersPage/>
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
