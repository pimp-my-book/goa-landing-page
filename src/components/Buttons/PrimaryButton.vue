<template>
    <button 
    :class="[regular ? 'bg-green hover:text-green-dark hover:bg-green-lighter font-body py-2 px-4 text-white   rounded' 
    : 'bg-green   hover:text-green-dark hover:bg-green-lighter font-body py-4 px-6 text-white rounded']">
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
    },
   
}
</script>

