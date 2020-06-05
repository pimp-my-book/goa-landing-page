<template>
    <div class="sm:flex lg:flex-row sm:flex-col content-center">
        <div class="icon-grid-container">
            <IconGridItem v-for="link in links" :key="link.url" v-bind:img="link.url"/>
        </div>
    </div>
</template>

<script>
import IconGridItem from "./IconGridItem"

export default {
    name: "IconGrid",
    components: {
        IconGridItem
    },
    props: {
        links: Array
    }
};
</script>

<style>
    .icon-grid-container {
        display: grid;
        grid-template-columns: auto auto auto auto;
        grid-gap: 10px;
        padding: 10px;
        margin: auto;
        padding: 20px;
        padding-bottom: 50px;
    }

    .icon-grid-container > div {
        text-align: center;
    }

    @media screen and (max-width: 420px) {
        .icon-grid-container{
            grid-template-columns: auto auto;
            padding-top: 50px
        }
    }
</style>
