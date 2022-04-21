<template>
	<div class="h-100 w-100 rounded-3 bg-light" style="">
		<div class="row">
			<div class="col-2 p-0">
				<div
					style="background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(90,92,106,1) 0%, rgba(32,45,58,1) 81.3% ); border-radius: 15px;"
					class="m-2"><img v-bind:src="thisBeer.image_url" class="img-fluid p-3" style="max-width: 200px; max-height: 300px" alt="Responsive image"></div>
			</div>
			<div class="col-10">
				<h2 class="text-start mt-3">{{ thisBeer.name }}</h2>
				<div class="text-start" style="margin-left: 10px;">
          <span class="label label-default bg-dark text-light rounded-3 p-1 m-1"
				v-for="tag in thisBeer.tagline.split('. ')" v-bind:key="tag">{{ tag }}</span>
				</div>
				<div class="text-start mt-5">
					<span class="fw-bold" style="font-size: 20px">Brassé la première fois:</span><span
					style="font-size: 20px; margin-left: 10px">{{ thisBeer.first_brewed }}</span>
				</div>
				<div class="text-start mt-2">
					<span class="fw-bold" style="font-size: 20px">Description:</span><span
					style="font-size: 20px; margin-left: 10px">{{ thisBeer.description }}</span>
				</div>
			</div>
		</div>
		<button class="btn btn-dark mt-2 mb-2" type="button" data-bs-toggle="collapse"
				v-bind:data-bs-target="'#collapse-' + thisBeer.id" aria-expanded="false"
				v-bind:aria-controls="'collapse-' + thisBeer.id">
			View more
		</button>
		<div class="collapse" v-bind:id="'collapse-' + thisBeer.id">
			<div class="card card-body mt-3 mb-3">
				<div>
					<div class="text-start mt-4">
						<h3>Informations:</h3>
					</div>

					<div class="row">
						<div class="col-6">
							<div class="text-start mt-2 - mb-2">
								<span class="fw-bold">ABV (Taux d'alcool):</span><span
								style="font-size: 20px; margin-left: 10px">{{ thisBeer.abv }}</span>
							</div>
							<div class="text-start mt-2 - mb-2">
								<span class="fw-bold">target_fg:</span><span
								style="font-size: 20px; margin-left: 10px">{{ thisBeer.target_fg }}</span>
							</div>
							<div class="text-start mt-2 - mb-2">
								<span class="fw-bold">EBC (Indice d'évaluation de la couleur de la biere):</span><span
								style="font-size: 20px; margin-left: 10px">{{ thisBeer.ebc }}</span>
							</div>
							<div class="text-start mt-2 - mb-2">
								<span class="fw-bold">ph:</span><span style="font-size: 20px; margin-left: 10px">{{
									thisBeer.ph
								}}</span>
							</div>
							<div class="text-start mt-2 - mb-2">
								<span class="fw-bold">volume:</span><span
								style="font-size: 20px; margin-left: 10px">{{ thisBeer.volume.value }} {{
									thisBeer.boil_volume.unit
								}}</span>
							</div>

						</div>
						<div class="col-6" style="border-left: solid black 3px">
							<div class="text-start mt-2 - mb-2">
								<span class="fw-bold">IBU (Taux d'amertume):</span><span
								style="font-size: 20px; margin-left: 10px">{{ thisBeer.ibu }}</span>
							</div>
							<div class="text-start mt-2 - mb-2">
								<span class="fw-bold">target_og:</span><span
								style="font-size: 20px; margin-left: 10px">{{ thisBeer.target_og }}</span>
							</div>
							<div class="text-start mt-2 - mb-2">
								<span class="fw-bold">srm:</span><span style="font-size: 20px; margin-left: 10px">{{
									thisBeer.srm
								}}</span>
							</div>
							<div class="text-start mt-2 - mb-2">
								<span class="fw-bold">attenuation_level:</span><span
								style="font-size: 20px; margin-left: 10px">{{ thisBeer.attenuation_level }}</span>
							</div>
							<div class="text-start mt-2 - mb-2">
								<span class="fw-bold">boil_volume:</span><span style="font-size: 20px; margin-left: 10px">{{
									thisBeer.boil_volume.value
								}} {{ thisBeer.boil_volume.unit }}</span>
							</div>
						</div>
					</div>
					<div class="text-start mt-4">
						<h3>Methode:</h3>
					</div>
					<div class="row">
						<div class="col-6">
							<div class="row text-light" style="margin-left: 15px; margin-right: 15px; background-image: radial-gradient( circle farthest-corner at -4% -12.9%,  rgba(74,98,110,1) 0.3%, rgba(30,33,48,1) 90.2% ); border-radius: 10px">
								<div class="col-12" v-for="(item, index) in thisBeer.method.mash_temp" v-bind:item="item" v-bind:index="index" :key="item">
									<div class="row">
										<div class="col-12 text-start mt-2 mb-0"><h5>Puré [ {{ index + 1 }} ]</h5></div>
									</div>
									<div class="row">
										<div class="col-6 text-start mt-0 - mb-1">
											<span class="fw-bold">Température de la cuisson de la puré:</span><span
											style="font-size: 15px; margin-left: 10px">{{ item.temp.value }} {{ item.temp.unit }}</span>
										</div>
										<div class="col-6 text-start mt-0 - mb-1">
											<span class="fw-bold">Duré de la cuisson de la puré:</span><span
											style="font-size:15px; margin-left: 10px">{{ item.duration }} minutes</span>
										</div>
									</div>

								</div>
							</div>

						</div>
						<div class="col-6" style="border-left: solid black 3px">
							<div class="text-start mt-2 - mb-2">
								<span class="fw-bold">Température de la fermentation:</span><span
								style="font-size: 15px; margin-left: 10px">{{
									thisBeer.method.fermentation.temp.value
								}} {{ thisBeer.method.fermentation.temp.unit }}</span>
							</div>
							<div class="text-start mt-2 - mb-2">
								<span class="fw-bold">Mélange:</span><span
								style="font-size: 15px; margin-left: 10px">{{ thisBeer.method.twist ? "Oui" : "Non" }}</span>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-6">
							<div class="text-start mt-4 mb-3">
								<h3>Ingrédients:</h3>
							</div>
							<div class="row text-light mt-2" style="margin-left: 15px; margin-right: 15px; background-image: radial-gradient( circle 610px at 5.2% 51.6%,  rgba(5,8,114,1) 0%, rgba(7,3,53,1) 97.5% );; border-radius: 10px" v-for="(value, name) in thisBeer.ingredients" :key="value">
								<div class="col-12 text-start">
									<div class="row">
										<div class="col-12 text-start mt-2 mb-2"><h5>{{
												name.charAt(0).toUpperCase() + name.substr(1)
											}}</h5></div>
									</div>
									<div class="mb-3" v-if="name === 'yeast'">
										<span class="fw-bold" style="margin-left: 15px;">Name:</span><span
										style="font-size: 15px; margin-left: 10px">{{ value }}</span>
									</div>
									<div v-else class="row mb-3" v-for="ingredient in value" :key="ingredient">
										<div v-for="(ingredient_value,ingredient_key) in ingredient" :key="ingredient_value">
											<div v-if="ingredient_key === 'name'">
                        <span class="fw-bold" style="margin-left: 15px;">{{
								ingredient_key.charAt(0).toUpperCase() + ingredient_key.substr(1)
							}}:</span><span style="font-size: 15px; margin-left: 10px">{{ ingredient_value }}</span>
											</div>
											<div v-else-if="ingredient_key === 'amount'">
                        <span style="margin-left: 25px;">{{
								ingredient_key.charAt(0).toUpperCase() + ingredient_key.substr(1)
							}}:</span><span style="font-size: 15px; margin-left: 10px">{{
													ingredient_value.value
												}} {{ ingredient_value.unit }}</span>
											</div>
											<div v-else>
                        <span style="margin-left: 25px;">{{
								ingredient_key.charAt(0).toUpperCase() + ingredient_key.substr(1)
							}}:</span><span style="font-size: 15px; margin-left: 10px">{{ ingredient_value }}</span>
											</div>
										</div>
									</div>

								</div>
							</div>
						</div>
						<div class="col-6 text-start">
							<div class="mt-4 mb-3">
								<h3>Autres:</h3>
							</div>
							<div class="row">
								<div class="col-12" style="padding-left: 25px;">
									<div class="mb-3">
										<h5>Aliments qui accompagnent adéquatement:</h5>
									</div>
									<div class="row">
										<div class="col-12">
											<ul>
												<li v-for="food in thisBeer.food_pairing" :key="food">
													{{ food }}
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-12" style="padding-left: 25px;">
									<div class="mb-3">
										<h5>Conseil du brasseur:</h5>
									</div>
									<div class="row">
										<div class="col-12" style="padding-left: 30px;">{{ thisBeer.brewers_tips }}</div>
									</div>
								</div>
							</div>
							<div class="row mt-3">
								<div class="col-12" style="padding-left: 25px;">
									<div class="mb-3">
										<h5>Contributeur:</h5>
									</div>
									<div class="row">
										<div class="col-12" style="padding-left: 30px;">{{ thisBeer.contributed_by }}</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "BeerDisplay",
	props: {
		thisBeer: Object
	},
	data() {
		return {};
	},
}
</script>

<style scoped>

</style>


<!--id: 192,-->
<!--name: "Punk IPA 2007 - 2010",-->
<!--tagline: "Post Modern Classic. Spiky. Tropical. Hoppy.",-->
<!--first_brewed: "04/2007",-->
<!--description: "Our flagship beer that kick started the craft beer revolution. This is James and Martin's original take on an American IPA, subverted with punchy New Zealand hops. Layered with new world hops to create an all-out riot of grapefruit, pineapple and lychee before a spiky, mouth-puckering bitter finish.",-->
<!--image_url: "https://images.punkapi.com/v2/192.png",-->
<!--abv: 6.0,-->
<!--ibu: 60.0,-->
<!--target_fg: 1010.0,-->
<!--target_og: 1056.0,-->
<!--ebc: 17.0,-->
<!--srm: 8.5,-->
<!--ph: 4.4,-->
<!--attenuation_level: 82.14,-->
<!--volume: {-->
<!--value: 20,-->
<!--unit: "liters"-->
<!--},-->
<!--boil_volume: {-->
<!--value: 25,-->
<!--unit: "liters"-->
<!--},-->
<!--method: {-->
<!--mash_temp: [-->
<!--{-->
<!--temp: {-->
<!--value: 65,-->
<!--unit: "celsius"-->
<!--},-->
<!--duration: 75-->
<!--}-->
<!--],-->
<!--fermentation: {-->
<!--temp: {-->
<!--value: 19.0,-->
<!--unit: "celsius"-->
<!--}-->
<!--},-->
<!--twist: null-->
<!--},-->
<!--ingredients: {-->
<!--malt: [-->
<!--{-->
<!--"name": "Extra Pale",-->
<!--"amount": {-->
<!--"value": 5.3,-->
<!--"unit": "kilograms"-->
<!--}-->
<!--}-->
<!--],-->
<!--hops: [-->
<!--{-->
<!--"name": "Ahtanum",-->
<!--"amount": {-->
<!--"value": 17.5,-->
<!--"unit": "grams"-->
<!--},-->
<!--"add": "start",-->
<!--"attribute": "bitter"-->
<!--},-->
<!--{-->
<!--"name": "Chinook",-->
<!--"amount": {-->
<!--"value": 15,-->
<!--"unit": "grams"-->
<!--},-->
<!--"add": "start",-->
<!--"attribute": "bitter"-->
<!--}-->
<!--],-->
<!--yeast: "Wyeast 1056 - American Ale™"-->
<!--},-->
<!--food_pairing: [-->
<!--"Spicy carne asada with a pico de gallo sauce",-->
<!--"Shredded chicken tacos with a mango chilli lime salsa",-->
<!--"Cheesecake with a passion fruit swirl sauce"-->
<!--],-->
<!--brewers_tips: "While it may surprise you, this version of Punk IPA isn't dry hopped but still packs a punch! To make the best of the aroma hops make sure they are fully submerged and add them just before knock out for an intense hop hit.",-->
<!--contributed_by: "Sam Mason <samjbmason>"-->