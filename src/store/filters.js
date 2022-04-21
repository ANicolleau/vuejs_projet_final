import Vuex from "vuex";

const filterStore = new Vuex.Store({
    state: {
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
    },
    mutations: {
        updateMalt (state, maltSelected) {
            state.malt = maltSelected
        }
    }
})

export default filterStore;