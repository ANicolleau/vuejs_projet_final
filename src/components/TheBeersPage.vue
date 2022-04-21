<template>
	<section v-if="errored">
		<p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer les informations depuis l'api
			https://api.punkapi.com/v2/beers. Veuillez réessayer ultérieurement.</p>
	</section>

	<section v-else>
		<div class="mb-3 row justify-content-md-center">
			<div class="col-1">
				<button class="page-link" href="#" :disabled="actualPage === 1" @click="previousPage">
					Previous
				</button>
			</div>
			<div class="col-1">
				<button class="page-link">
					{{ nbBeerBeginPage }} - {{ nbBeerEndPage }}
				</button>
			</div>
			<div class="col-1">
				<button class="page-link" href="#" :disabled="isLastPage" @click="nextPage">
					Next
				</button>
			</div>
		</div>
		<div class="row m-2 bg-light" style="border: solid 1px lightgrey; border-radius: 25px; box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;height: 65vh; overflow: scroll">
			<div class="col-12">
				<div v-if="loading">Chargement...</div>
				<div class="row mt-3" v-for="beer in beers" :key="beer.id">
					<div class="col-12 p-3">
						<BeerDisplay :thisBeer="beer"/>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
import BeerDisplay from "./BeerDisplay"
import axios from 'axios';
import filterStore from "@/store/filters";
export default {
	name: "TheBeersPage",
	components: {
		BeerDisplay
	},
	store: {
		filterStore
	},
	data() {
		return {
			beers: null,
			loading: true,
			errored: false,
			actualPage: 1,
			nbBeerBeginPage: 1,
			nbBeerEndPage: 20,
			isLastPage: false,
			maxPage: 0,
			filters: {
				abv_gt: null,
				abv_lt: null,
				ibu_gt: null,
				ibu_lt: null,
				ebc_gt: null,
				ebc_lt: null,
				beer_name: null,
				yeast: null,
				brewed_before: null,
				brewed_after: null,
				hops: null,
				malt: null,
				food: null,
				ids: null,
			}
		}
	},
	filters: {},
	computed: {},
	mounted() {
		axios
			.get('https://api.punkapi.com/v2/beers?page=' + this.actualPage + "&per_page=20")
			.then(response => {
				this.beers = response["data"];
			})
			.catch(error => {
				console.log(error)
				this.errored = true
			})
			.finally(() => this.loading = false)
	},
	methods: {
		changeBeerPage: function (pageIndex) {
			const filters = this.getFilteredBears()
			axios
				.get('https://api.punkapi.com/v2/beers?page=' + pageIndex + "&per_page=20" + filters)
				.then(response => {
					if (response.data.length) {
						this.beers = response.data;
						this.actualPage = pageIndex;
					}
					this.isLastPage = response.data.length !== 20;
				})
				.catch(error => {
					console.log(error)
					this.errored = true
				})
				.finally(() => {
					this.loading = false;
				})
			window.scrollTo(0, 0);
		},
		previousPage: function () {
			if (this.actualPage !== 1) {
				this.nbBeerBeginPage -= 20;
				this.nbBeerEndPage -= 20;
			}
			this.changeBeerPage(this.actualPage - 1)
		},
		nextPage: function () {
			if (!this.isLastPage) {
				this.nbBeerBeginPage += 20;
				this.nbBeerEndPage += 20;
			}
			this.changeBeerPage(this.actualPage + 1)
		},
		getFilteredBears: function () {
			let filters = "";
			this.filters.abv_gt = 6;
			for (const [filterName, filterValue] of Object.entries(this.filters)) {
				if (filterValue) {
					filters += `&${filterName}=${filterValue}`
				}
			}
			return filters;
		},
		applyFilters: function () {
			this.actualPage = 1
			let filters = "";
			this.filters.abv_gt = 5;
			for (const [filterName, filterValue] of Object.entries(this.filters)) {
				if (filterValue) {
					filters += `&${filterName}=${filterValue}`
				}
			}
			if (!filters) {
				console.log("No filter")
				return;
			}
			axios
				.get('https://api.punkapi.com/v2/beers?page=' + this.actualPage + "&per_page=20" + filters)
				.then(response => {
					this.beers = response.data;
				})
				.catch(error => {
					console.log(error)
					this.errored = true
				})
				.finally(() => {
					this.loading = false;
				})
			window.scrollTo(0, 0);
		}
	}
}
</script>

<style scoped>

</style>