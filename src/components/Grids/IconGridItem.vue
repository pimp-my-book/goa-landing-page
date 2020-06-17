<template>
    <div>
        <embed width="100px" height="100px" :src="img" />
    </div>
</template>

<script>
export default {
    name: "IconGridItem",
    props: {
        img: String
    }
};
</script>