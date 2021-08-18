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
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #424040;

    & .description {
        width: 100%;
        font-weight: bold;
        font-family: "Star Jedi", arial;
        font-size: 1.25rem;
        color: #f8c10a;
        margin: 0.25rem;
    }
}

</style>