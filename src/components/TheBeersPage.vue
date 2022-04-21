<template>
  <section v-if="errored">
    <p>Nous sommes désolés, nous ne sommes pas en mesure de récupérer les informations depuis l'api
      https://api.punkapi.com/v2/beers. Veuillez réessayer ultérieurement.</p>
  </section>

  <section v-else>
    <div v-if="loading">Chargement...</div>

    <div class="row mt-3">
      <div class="col bg-info" style="height: 500px">
        <button class="btn btn-primary" @click="applyFilters">
          Apply filters
        </button>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col bg-dark p-5">
        <div class="row mt-3" v-for="beer in beers" :key="beer.id">
          {{ beer.id }}
          <BeerDisplay :thisBeer="beer"/>
        </div>
        <nav aria-label="Page navigation example">
          <ul class="pagination">
            <li class="page-item">
              <button class="page-link" href="#" :disabled="actualPage === 1" @click="previousPage">
                Previous
              </button>
              <button class="page-link">
                {{ nbBeerBeginPage }} - {{ nbBeerEndPage }}
              </button>
              <button class="page-link" href="#" :disabled="isLastPage" @click="nextPage">
                Next
              </button>
            </li>
          </ul>
        </nav>
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