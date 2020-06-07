<template>
    <div class="how-to-grid-item rounded-lg shadow-lg">
        <embed class="mt-4" width="100px" height="100px" :src="img" />
        <div>
            <h3 class="pt-8">
                {{ header }}
            </h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "HowToGridItem",
    props: {
        img: String,
        header: String
    }
}
</script>

<style>
    .how-to-grid-item {
        padding: 25px;
        width: 400px;
        height: 100%;
        margin: auto;
        max-height: 250px;
    }

    .how-to-grid-item > embed {
        text-align: center;
    }

    @media screen and (max-width: 420px) {
        .how-to-grid-item {
            padding: 30px;
            width: 330px;
        }
    }
</style>
