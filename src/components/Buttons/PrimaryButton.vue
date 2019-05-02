<template>
    <button class="bg-green font-body text-white  py-2 px-4 rounded">
     <a class="no-underline" 
     :href="url">
     {{text}}
     </a>
    </button>
</template>

<script>
export default {
    name: 'PrimaryButton',
    props: {
        text: String,
        url: String
    }
}
</script>

