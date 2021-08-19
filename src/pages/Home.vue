<template>
    <div class="py-4 main">
        <div class="search-section">
            <p class="description">Let's looking for cool stuff!</p>
            <b-button class="mx-2 default-button" @click="getDataByType('people')">People</b-button>
            <b-button class="mx-2 default-button" @click="getDataByType('starships')">Starships</b-button>
            <b-button class="mx-2 default-button" @click="getDataByType('planets')">Planets</b-button>
        </div>
        <Table 
            :items="tableItems" 
            :isBusy="loadingData" 
            :totalRows="tableRows"
            @selectedDetails="getSelectedDetails"
            @updatedPage="getDataByType(currentType, $event)"
        />
        <b-sidebar
            id="details-sidebar"
            backdrop-variant="dark"
            no-header
            backdrop
            right
            >
            <Details v-if="selectedDetails" :details="selectedDetails" />
        </b-sidebar>
    </div>
</template>

<script>
import Table from '@/components/common/Table.vue'
import Details from '@/components/common/Details.vue'
import getData from '@/services/swApi.js' 
    export default {

        components: {
            Table,
            Details
        },

        data() {
            return {
                tableItems: null,
                tableRows: 0,
                loadingData: false,
                currentType: '',
                selectedDetails: null
            }
        },

        methods: {
            getDataByType(value, page = 1) {
                this.currentType = value
                this.loadingData = true
                getData(this.currentType, page)
                    .then(({ results, count }) => {
                        this.tableItems = results.map(data => ({...data, type: this.currentType}))
                        this.tableRows = count
                        this.loadingData = false
                    })
                    .catch(() => {
                        this.loadingData = false
                    })
            },
            getSelectedDetails(data) {
                this.selectedDetails = data
            }

        }
        
    }
</script>

<style lang="scss" scoped>

.main {
    flex: 1;
}

.description{
    font-size: $l;
    font-weight: bold;
    color: $dark-grey;
}

</style>