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
        <Alert
            :show="alert.show"
            :variant="alert.variant"
            :dismissible="alert.dismissible"
            :fade="alert.fade"
            :title="alert.title"
            :dismissSecs="alert.dismissSecs"
            @updatealert="alert.show = false"
        ></Alert>
    </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import Table from '@/components/common/Table.vue'
import Alert from '@/components/common/Alert.vue'
import Details from '@/components/common/Details.vue'
import getData from '@/services/swApi.js' 
    export default {

        components: {
            Table,
            Details,
            Alert
        },

        data() {
            return {
                tableItems: null,
                tableRows: 0,
                loadingData: false,
                currentType: '',
                selectedDetails: null,
                alert: {
                    title: '',
                    show: false,
                    fade: true,
                    variant: '',
                    dismissible: true
                },
            }
        },

        computed: {
            ...mapState(['pages', 'count']),
            ...mapGetters(['getPartialStuff'])
        },

        methods: {
            ...mapMutations(['setPage', 'setTypeData', 'setCount']),

            getDataByType(value, page = 1) {
                this.currentType = value
                this.loadingData = true
                if (!this.pages[value].includes(page)) {

                    this.setPage({type: value, page});

                    getData(this.currentType, page)
                        .then(({ results, count }) => {
                            this.tableItems = results.map(data => ({
                                ...data, 
                                type: this.currentType
                            }))

                            this.setTypeData({ data: this.tableItems, type: this.currentType })

                            if (this.count[this.currentType] === 0) {
                                this.setCount({ count, type: this.currentType })
                            }
                            this.tableRows = count
                            this.loadingData = false
                        })
                        .catch(() => {
                            this.loadingData = false
                            //show error alert
                            const alertParams = {
                                variant: 'danger',
                                title: 'There was an error during the request. Please, try again',
                                dismissSecs: 3
                            }
                            this.showAlert(alertParams)
                        })
                } else {
                    this.tableItems = this.getPartialStuff({type: this.currentType, page})
                    this.tableRows = this.count[this.currentType]
                    this.loadingData = false
                }
            },
            getSelectedDetails(data) {
                this.selectedDetails = data
            },
            showAlert({variant, title, dismissSecs}){
                this.alert = {
                    title,
                    variant,
                    dismissSecs,
                    show: true,
                    fade: true,
                    dismissible: true
                }
            }

        }
        
    }
</script>

<style lang="scss">

.main {
    flex: 1;
}

.description {
    font-size: $l;
    font-weight: bold;
    color: $dark-grey;
}

</style>