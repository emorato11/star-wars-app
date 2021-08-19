<template>
    <div>
        <h3 class="py-4 details-title">{{details.name}}</h3>
        <div class="p-4">
            <ul class="list" v-if="details.type === 'people'">
                <li>Gender: <strong>{{details.gender}}</strong></li>
                <li>Birth year: <strong>{{details.birth_year}}</strong></li>
                <li>Eyes color: <strong>{{details.eye_color}}</strong></li>
                <li>Hair color: <strong>{{details.hair_color}}</strong></li>
                <li>Skin color: <strong>{{details.skin_color}}</strong></li>
                <li>Weight: <strong>{{details.mass}}</strong></li>
                <li>Height: <strong>{{details.height}}</strong></li>
            </ul>
            <ul class="list" v-if="details.type === 'starships'">
                <li>Manufacturer: <strong>{{details.manufacturer}}</strong></li>
                <li>MGLT: <strong>{{details.MGLT}}</strong></li>
                <li>Class: <strong>{{details.starship_class}}</strong></li>
                <li>Model: <strong>{{details.model}}</strong></li>
                <li>Max speed: <strong>{{details.max_atmosphering_speed}}</strong></li>
                <li>Crew: <strong>{{details.crew}}</strong></li>
                <li>Cost: <strong>{{details.cost_in_credits}}</strong></li>
            </ul>
            <ul class="list" v-if="details.type === 'planets'">
                <li>Terrain Type/s: <strong>{{details.terrain}}</strong></li>
                <li>Population: <strong>{{details.population}}</strong></li>
                <li>Gravity: <strong>{{details.gravity}}</strong></li>
                <li>Diameter: <strong>{{details.diameter}}</strong></li>
                <li>Climate: <strong>{{details.climate}}</strong></li>
                <li>Orbital Period: <strong>{{details.orbital_period}}</strong></li>
                <li>Rotation Period: <strong>{{details.rotation_period}}</strong></li>
            </ul>

        </div>
        <b-button class="default-button" @click="hide">Close</b-button>
    </div>
</template>

<script>
    export default {

        props: {
            details: {
                type: Object,
                default: null
            }
        },

        methods: {
            hide () {
                this.$root.$emit('bv::toggle::collapse', 'details-sidebar')
            }
        }
        
    }
</script>

<style lang="scss" scoped>

.list {
    display: flex;
    flex-direction: column;
    text-align: start;
}

ul { 
    list-style-type: none;
    margin: 0;
}
li { 
    display: inline-block;
    padding: 0.25rem 0;
}

.details-title {
    font-family: "Star Jedi", arial;
    color: $gold;
    background-color: $dark-grey;
    border-bottom: 4px solid $gold;
}

</style>