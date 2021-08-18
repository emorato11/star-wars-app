<template>
    <div class="header p-3">
        <img alt="star wars logo" height="100" width="200" src="../../assets/main-logo.png">
        <h3 class="title">Star Wars App</h3>
    </div>
</template>

<script>
    export default {
        // data () {

        // },

        methods: {
            greeting (value) {
                return `Hola ${value}`
            }
        }
    }
</script>

<style lang="scss" scoped>

.header {
    display: flex;
    align-items: center;
    background: #424040;

    & .title {
        width: 100%;
        font-weight: bold;
        font-size: 2.25rem;
        font-family: "Star Jedi", arial;
        color: #f8c10a;
    }
}

</style>