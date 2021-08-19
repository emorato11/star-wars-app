<template>
  <div>
    <div class="d-flex flex-column align-items-center">
        <!-- Filter -->
        <div class="d-flex my-3">
            <b-form-input
                id="filter-input"
                v-model="filter"
                type="search"
                placeholder="Filter by name"
            ></b-form-input>
            <b-button 
                class="default-button" 
                :disabled="!filter" 
                @click="filter = ''"
            >Clear
            </b-button>
        </div>

        <!-- Table -->
        <b-table
            :items="items"
            :busy="isBusy"
            :fields="fields"
            :current-page="currentPage"
            :per-page="perPage"
            :filter="filter"
            label-sort-asc=""
            label-sort-desc=""
            label-sort-clear=""
            :filter-included-fields="filterOn"
            :sort-direction="'asc'"
            stacked="md"
            show-empty
            small
            @filtered="onFiltered"
            class="w-50 my-3"
        >
            <template #cell(actions)="row">
                <b-button
                    size="sm" 
                    @click="info(row.item)"
                    class="mr-1 medium-button">
                Go to detail
                </b-button>
                <!-- <b-button size="sm" @click="row.toggleDetails">
                {{ row.detailsShowing ? 'Hide' : 'Show' }} Details
                </b-button> -->
            </template>

            <!-- <template #row-details="row">
                <b-card>
                    <ul>
                        <li v-for="(value, key) in row.item" :key="key">{{ key }}: {{ value }}</li>
                    </ul>
                </b-card>
            </template> -->
            <template #table-busy>
                <div class="text-center spinner my-4">
                    <b-spinner class="align-middle"></b-spinner>
                    <strong class="mx-4">Loading...</strong>
                </div>
            </template>
        </b-table>
        
        <!-- Paginator -->
        <div class="my-3 d-flex">
            <b-pagination
                v-model="currentPage"
                :total-rows="getRows()"
                :per-page="perPage"
                align="center"
                pills
                class="my-0 mx-2"
            ></b-pagination>
        </div>
    </div>
  </div>
</template>

<script>
    export default {

        props: {
            items: {
                type: Array,
                default: () => [],
            },
            isBusy: {
                type: Boolean,
                default: false
            },
            totalRows: {
                type: Number,
                default: 0
            }
        },
        data() {
            return {
                fields: [
                    { key: 'name', label: 'Name', sortable: true },
                    { key: 'actions', label: '' }
                ],
                currentPage: 1,
                perPage: 0,
                filter: null,
                filteredItems: null,
                filterOn: [],
            }
        },
        computed: {
            sortOptions() {
                return this.fields
                .filter(f => f.sortable)
                .map(f => {
                    return { text: f.label, value: f.key }
                })
            },
        },
        mounted() {
        },
        methods: {
            info(item) {
                this.$emit('selectedDetails', item)
                this.$root.$emit('bv::toggle::collapse', 'details-sidebar')
            },
            getRows() {
                return this.filter?.length ? this.filteredItems : this.totalRows
            },
            onFiltered(filteredItems) {
                this.filteredItems = filteredItems.length
                this.currentPage = 1
            }
        },
        watch: {
            currentPage (val) {
                this.$emit('updatedPage', val)
            },
        },
    }
</script>
<style lang="scss">

tr { 
    vertical-align: middle;
}

.page-item {

    .page-link {
        color: $dark-grey;

        &:hover {
            color: $gold;
        }
    }
    
    &.active .page-link {
        color: $gold !important;
        background-color: $dark-grey !important;
        font-weight: bold;
        border-color: $gold !important
        
    }
}

.spinner {
    color: $dark-grey;
}

</style>