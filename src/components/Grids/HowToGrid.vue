<template>
    <div class="sm:flex lg:flex-row sm:flex-col content-center">
        <div class="how-grid-container">
            <HowToGridItem
                v-for="link in links"
                :key="link.header"
                v-bind:img="link.url"
                v-bind:header="link.header"
            />
        </div>
    </div>
</template>

<script>
import HowToGridItem from "./HowToGridItem";

export default {
    name: "HowToGrid",
    components: {
        HowToGridItem
    },
    props: {
        links: Array
    }
}
</script>

<style>
    .how-grid-container {
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 10px;
        padding: 10px;
        margin: auto;
        padding: 20px;
        max-width: 1366px;
    }

    .how-grid-container > div {
        text-align: center;
    }

    @media screen and (max-width: 720px) {
        .how-grid-container{
            grid-template-columns: auto;
            grid-gap: 50px
        }
    }
</style>
