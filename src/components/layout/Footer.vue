<template>
    <div class="footer py-2">
        <p class="description">May the force be with you!</p>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>

.footer {
    width: 100%;
    background-color: $dark_grey;

    & .description {
        width: 100%;
        font-weight: bold;
        font-family: "Star Jedi", arial;
        font-size: 1.25rem;
        color: $gold;
        margin: 0.25rem;
    }
}

</style>