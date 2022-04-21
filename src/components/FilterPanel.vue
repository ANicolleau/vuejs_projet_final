<template>
	<div class="col bg-info pt-5" style="height: 500px">
		<Slider v-model="value" v-bind="options"
				:min="1"
				:max="20"
				:step="0.25"
				:format="format"/>
	</div>
</template>

<script>
import Slider from "@vueform/slider";

export default {
	name: "FilterPanel",
	data() {
		return {
			value: [4, 7],
			format: {
				decimals: 2
			}
		};
	},
	components: {
		Slider
	}
}
</script>

<style src="@vueform/slider/themes/default.css"></style>
<style scoped>
</style>
