<template>
    <button class="bg-green-light font-body text-green-darker  py-2 px-4 rounded">
     <a class="no-underline" 
     :href="url">
     {{text}}
     </a>
    </button>
</template>
<script>
export default {
    name: 'SecondaryButton',
    props: {
        text: String,
        url: String
    }
}
</script>
