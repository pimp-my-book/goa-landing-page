<template>
    <button class="bg-green font-body text-white  py-2 px-4 rounded">
     {{text}}
    </button>
</template>

<script>
export default {
    name: 'PrimaryButton',
    props: {
        text: String
    }
}
</script>

