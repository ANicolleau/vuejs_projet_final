<template>
	<section v-if="errored">
		<p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer les informations depuis l'api
			https://api.punkapi.com/v2/beers. Veuillez réessayer ultérieurement.</p>
	</section>

	<section v-else>
		<div class="mb-3 row justify-content-md-center">
			<div class="col-1">
				<button class="page-link btn {{actualPage === 1 ? 'disabled' : ''}}" href="#" :disabled="actualPage === 1" @click="previousPage">
					Previous
				</button>
			</div>
			<div class="col-1">
				<button class="page-link">
					{{ nbBeerBeginPage }} - {{ nbBeerEndPage }}
				</button>
			</div>
			<div class="col-1">
				<button class="page-link btn {{isLastPage ? 'disabled' : ''}}" href="#" :disabled="isLastPage" @click="nextPage">
					Next
				</button>
			</div>
		</div>
		<div id="beer_container" class="row m-2 bg-light" style="border: solid 1px lightgrey; border-radius: 25px; box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;height: 50vh; overflow: auto">
			<div class="col-12">
				<div v-if="loading">Chargement...</div>
				<div v-else-if="beers.length === 0">No beer found</div>
				<div v-else class="row mt-3" v-for="beer in beers" :key="beer.id">
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

export default {
	name: "TheBeersPage",
	components: {
		BeerDisplay
	},
	props: {
		filtersFromHeader: Object
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
	watch: {
		filtersFromHeader: function () {
			this.updateFiltersFromHeaderFilters();
			this.actualPage = 1
			let filters = "";
			for (const [filterName, filterValue] of Object.entries(this.filters)) {
				if (filterValue) {
					filters += `&${filterName}=${filterValue}`
				}
			}
			axios
				.get('https://api.punkapi.com/v2/beers?page=' + this.actualPage + "&per_page=20" + filters)
				.then(response => {
					this.beers = response.data;
					this.isLastPage = response.data.length !== 20;
					this.goScrollTop();
				})
				.catch(error => {
					console.log(error)
					this.errored = true
				})
				.finally(() => {
					this.updatePagination("filtersFromHeader")
					this.loading = false;
				})
		}
	},
	mounted() {
		axios
			.get('https://api.punkapi.com/v2/beers?page=' + this.actualPage + "&per_page=20")
			.then(response => {
				this.beers = response["data"];
				this.goScrollTop();
			})
			.catch(error => {
				console.log(error)
				this.errored = true
			})
			.finally(() => {
				this.loading = false
			})
	},
	methods: {
		updateFiltersFromHeaderFilters: function () {
			this.filters = {}
			Object.entries(this.filtersFromHeader).forEach(([key, value]) => {
				this.filters[key] = value;
			})
		},
		changeBeerPage: function (pageIndex, changePageEvent) {
			const filters = this.getFilteredBears()
			axios
				.get('https://api.punkapi.com/v2/beers?page=' + pageIndex + "&per_page=20" + filters)
				.then(response => {
					if (response.data.length) {
						this.beers = response.data;
						this.actualPage = pageIndex;
					}
					this.isLastPage = response.data.length !== 20;
					this.goScrollTop();
				})
				.catch(error => {
					console.log(error)
					this.errored = true
				})
				.finally(() => {
					this.updatePagination(changePageEvent)
					this.loading = false;
				})
		},
		resetPagination: function () {
			this.nbBeerBeginPage = 1;
			this.nbBeerEndPage = 20;
		},
		updatePagination: function (changePageEvent) {
			switch (changePageEvent) {
				case "previousPage":
					if (this.actualPage !== 1 && this.beers.length) {
						this.nbBeerBeginPage = (this.actualPage * 20) - 19;
						this.nbBeerEndPage = this.actualPage * 20;
					} else {
						this.resetPagination()
					}
					break;
				case "nextPage":
					if (this.beers.length) {
						this.nbBeerBeginPage = (this.actualPage * 20) - 19;

						if (this.isLastPage) {
							this.nbBeerEndPage = (this.nbBeerBeginPage - 1) + this.beers.length;
							console.log(this.nbBeerEndPage)
						} else {
							this.nbBeerEndPage = this.actualPage * 20;
						}
					}
					break;
				case "filtersFromHeader":
					if (this.beers.length) {
						if (this.isLastPage) {
							this.nbBeerBeginPage = 1;
							this.nbBeerEndPage = this.beers.length;
						} else {
							this.resetPagination();
						}
					}

					break;
			}
		},
		previousPage: function () {
			this.changeBeerPage(this.actualPage - 1, "previousPage")

		},
		nextPage: function () {
			this.changeBeerPage(this.actualPage + 1, "nextPage")

		},
		getFilteredBears: function () {
			let filters = "";
			for (const [filterName, filterValue] of Object.entries(this.filters)) {
				if (filterValue) {
					filters += `&${filterName}=${filterValue}`
				}
			}
			return filters;
		},
		goScrollTop: function () {
			document.getElementById("beer_container").scrollTop = 0;
		}
	}
}
</script>

<style scoped>

</style>