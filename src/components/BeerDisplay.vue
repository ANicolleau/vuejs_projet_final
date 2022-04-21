<template>
	<div class="h-100 w-100 rounded-3 bg-light" style="">
		<div class="row">
			<div class="col-4 bg-warning"><img src="{{image_url}}" class="img-fluid border-dark" style="max-width: 200px;" alt="Responsive image"></div>
			<div class="col-8">
				<h2>{{name}}</h2>
				<div class="text-start">
					<span class="label label-default bg-dark text-light rounded-3 p-1 m-1 ">{{tagline}}</span>
				</div>
				<div class="text-start mt-4">
					<span class="fw-bold" style="font-size: 20px">Brassé la première fois:</span><span style="font-size: 20px; margin-left: 10px">{{first_brewed}}</span>
				</div>
				<div class="text-start mt-4">
					<span class="fw-bold" style="font-size: 20px">Description:</span><span style="font-size: 20px; margin-left: 10px">{{description}}</span>
				</div>
			</div>
		</div>
		<div class="text-start mt-4">
			<h3>Informations:</h3>
		</div>
		<div class="row">
			<div class="col-7">
				<div class="text-start mt-2 - mb-2">
					<span class="fw-bold">ABV (Taux d'alcool):</span><span style="font-size: 20px; margin-left: 10px">{{abv}}</span>
				</div>
				<div class="text-start mt-2 - mb-2">
					<span class="fw-bold">target_fg:</span><span style="font-size: 20px; margin-left: 10px">{{target_fg}}</span>
				</div>
				<div class="text-start mt-2 - mb-2">
					<span class="fw-bold">EBC (Indice d'évaluation de la couleur de la biere):</span><span style="font-size: 20px; margin-left: 10px">{{ebc}}</span>
				</div>
				<div class="text-start mt-2 - mb-2">
					<span class="fw-bold">ph:</span><span style="font-size: 20px; margin-left: 10px">{{ph}}</span>
				</div>
				<div class="text-start mt-2 - mb-2">
					<span class="fw-bold">volume:</span><span style="font-size: 20px; margin-left: 10px">{{volume.value}} {{boil_volume.unit}}</span>
				</div>

			</div>
			<div class="col-5" style="border-left: solid black 3px">
				<div class="text-start mt-2 - mb-2">
					<span class="fw-bold">IBU (Taux d'amertume):</span><span style="font-size: 20px; margin-left: 10px">{{ibu}}</span>
				</div>
				<div class="text-start mt-2 - mb-2">
					<span class="fw-bold">target_og:</span><span style="font-size: 20px; margin-left: 10px">{{target_og}}</span>
				</div>
				<div class="text-start mt-2 - mb-2">
					<span class="fw-bold">srm:</span><span style="font-size: 20px; margin-left: 10px">{{srm}}</span>
				</div>
				<div class="text-start mt-2 - mb-2">
					<span class="fw-bold">attenuation_level:</span><span style="font-size: 20px; margin-left: 10px">{{attenuation_level}}</span>
				</div>
				<div class="text-start mt-2 - mb-2">
					<span class="fw-bold">boil_volume:</span><span style="font-size: 20px; margin-left: 10px">{{boil_volume.value}} {{boil_volume.unit}}</span>
				</div>
			</div>
		</div>
		<div class="text-start mt-4">
			<h3>Methode:</h3>
		</div>
		<div class="row">
			<div class="col-6">
				<div class="text-start mt-2 - mb-2">
					<span class="fw-bold">mash temp</span><span style="font-size: 20px; margin-left: 10px">{{method.mash_temp[0].temp.value}} {{method.mash_temp[0].temp.unit}}</span>
				</div>
				<div class="text-start mt-2 - mb-2">
					<span class="fw-bold">mash duration</span><span style="font-size: 20px; margin-left: 10px">{{method.mash_temp[0].duration}}</span>
				</div>
			</div>
			<div class="col-6" style="border-left: solid black 3px">
				<div class="text-start mt-2 - mb-2">
					<span class="fw-bold">Fermentation température:</span><span style="font-size: 20px; margin-left: 10px">{{method.fermentation.temp.value}} {{method.fermentation.temp.unit}}</span>
				</div>
				<div class="text-start mt-2 - mb-2">
					<span class="fw-bold">Twist:</span><span style="font-size: 20px; margin-left: 10px">{{method.twist}}</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "BeerDisplay",
	data() {
		return {
			id: 192,
			name: "Punk IPA 2007 - 2010",
			tagline: "Post Modern Classic. Spiky. Tropical. Hoppy.",
			first_brewed: "04/2007",
			description: "Our flagship beer that kick started the craft beer revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.",
			image_url: "https://images.punkapi.com/v2/192.png",
			abv: 6.0,
			ibu: 60.0,
			target_fg: 1010.0,
			target_og: 1056.0,
			ebc: 17.0,
			srm: 8.5,
			ph: 4.4,
			attenuation_level: 82.14,
			volume: {
				value: 20,
				unit: "liters"
			},
			boil_volume: {
				value: 25,
				unit: "liters"
			},
			method: {
				mash_temp: [
					{
						temp: {
							value: 65,
							unit: "celsius"
						},
						duration: 75
					}
				],
				fermentation: {
					temp: {
						value: 19.0,
						unit: "celsius"
					}
				},
				twist: null
			},
			ingredients: {
				malt: [
					{
						"name": "Extra Pale",
						"amount": {
							"value": 5.3,
							"unit": "kilograms"
						}
					}
				],
				hops: [
					{
						"name": "Ahtanum",
						"amount": {
							"value": 17.5,
							"unit": "grams"
						},
						"add": "start",
						"attribute": "bitter"
					},
					{
						"name": "Chinook",
						"amount": {
							"value": 15,
							"unit": "grams"
						},
						"add": "start",
						"attribute": "bitter"
					}
				],
				yeast: "Wyeast 1056 - American Ale™"
			},
			food_pairing: [
				"Spicy carne asada with a pico de gallo sauce",
				"Shredded chicken tacos with a mango chilli lime salsa",
				"Cheesecake with a passion fruit swirl sauce"
			],
			brewers_tips: "While it may surprise you, this version of Punk IPA isn't dry hopped but still packs a punch! To make the best of the aroma hops make sure they are fully submerged and add them just before knock out for an intense hop hit.",
			contributed_by: "Sam Mason <samjbmason>"
		};
	},
}
</script>

<style scoped>

</style>