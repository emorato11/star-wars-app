import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        stuff: {
            people: [],
            starships: [],
            planets: [],
        },
        pages: {
            people: [],
            starships: [],
            planets: [],
        },
        count: {
            people: 0,
            starships: 0,
            planets: 0,
        },
    },

    getters: {

        getPageIndex: (state) => (payload) => {
            const { type, page } = payload
            return state.pages[type].findIndex(p => p === page)
        },

        getPartialStuff: (state, getters) => (payload) => {
            const { type } = payload
            const pageIndex = getters.getPageIndex(payload)
            const operation = (pageIndex + 1) * 10
            return state.stuff[type].slice( operation - 10, operation)
        }
           
    },

    mutations: {
        setPage(state, data) {
            const { page, type } = data
            state.pages[type].push(page)
        },
        setTypeData(state, payload) {
            const { data, type } = payload
            state.stuff[type].push(...data)
        },
        setCount(state, payload) {
            const { count, type } = payload
            state.count[type] = count
        }

    }
})
export default store;