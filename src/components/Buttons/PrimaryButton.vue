<template>
    <button :class="[regular ? 'bg-green font-body py-2 px-4 text-white   rounded' : 'bg-green font-body py-4 px-6 text-white rounded']">
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
        url: String,
        regular: Boolean,
        large: Boolean
    },
   
}
</script>

