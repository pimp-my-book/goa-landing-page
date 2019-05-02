<template>
    <button  :class="[regular 
    ? ' hover:text-green-darker hover:bg-transparent bg-green-lighter font-body py-2 px-4 text-green-darker   rounded' 
    : ' hover:text-green-darker  hover:bg-transparent bg-green-lighter font-body py-4 px-6 text-green-darker rounded']">
                
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
        url: String,
        regular: Boolean,
    }
}
</script>


