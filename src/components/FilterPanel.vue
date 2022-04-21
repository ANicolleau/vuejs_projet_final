<template>
	<div class="row m-2" style="height: 250px; background-image: linear-gradient( 109.6deg,  rgba(5,84,94,1) 16%, #bbb 91.1% ); border-radius: 25px; box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;">
		<div class="col-6 p-4 text-start text-light">
			<div class="row align-items-center" style="height: 83px">
				<div class="col-5"><h5>ABV (Alcohol By Volume)</h5></div>
				<div class="col-7">
					<Slider v-model="value"
							:min="1"
							:max="20"
							:step="0.25"
							:format="format"/>
				</div>
			</div>
			<div class="row align-items-center" style="height: 83px">
				<div class="col-5"><h5>IBU (International Bitterness Unit)</h5></div>
				<div class="col-7">
					<Slider v-model="value_ibu"
							:min="1"
							:max="160"
							:step="1"/>
				</div>
			</div>
			<div class="row align-items-center" style="height: 83px">
				<div class="col-5"><h5>EBC (European Brewery Convention)</h5></div>
				<div class="col-7">
					<Slider v-model="value_ebc"
							:min="1"
							:max="140"
							:step="1"/>
				</div>
			</div>
		</div>
		<div class="col-6 text-start text-light">
			<div class="row align-items-center" style="height: 83px">
				<div class="col-6">
					<div>Selected: {{ selected }}</div>

					<select class="dropdown-menu-dark w-100" v-model="selected">
						<option disabled value="">Please select one</option>
						<option>A</option>
						<option>B</option>
						<option>C</option>
					</select>
				</div>
				<div class="col-6">
					<div>Selected: {{ selected }}</div>

					<select class="dropdown-menu-dark w-100" v-model="selected">
						<option disabled value="">Please select one</option>
						<option>A</option>
						<option>B</option>
						<option>C</option>
					</select></div>
			</div>
			<div class="row align-items-center" style="height: 83px">
				<div class="col-6">
					<div>Selected: {{ selected }}</div>

					<select class="dropdown-menu-dark w-100" v-model="selected">
						<option disabled value="">Please select one</option>
						<option>A</option>
						<option>B</option>
						<option>C</option>
					</select></div>
				<div class="col-6">
					<div>Selected: {{ selected }}</div>

					<select class="dropdown-menu-dark w-100" v-model="selected">
						<option disabled value="">Please select one</option>
						<option>A</option>
						<option>B</option>
						<option>C</option>
					</select></div>
			</div>
			<div class="row align-items-center" style="height: 83px">
				<div class="col-6 align-middle">
					<div>Search name of beer:</div>
					<input class="dropdown-menu-dark w-100" v-model="message" placeholder="edit me"/>
				</div>
				<div class="col-6 align-middle">
					<button class="btn btn-success w-100">Search</button>
				</div>
			</div>
		</div>
	</div>

</template>

<script>
import Slider from "@vueform/slider";

export default {
	name: "FilterPanel",
	data() {
		return {
			value: [4, 7],
			value_ibu: [30, 70],
			value_ebc: [30, 70],
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
