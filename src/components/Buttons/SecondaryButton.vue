<template>
    <button  :class="[regular 
    ? ' hover:text-green-darker hover:bg-transparent bg-green-lighter font-body py-2 px-4 text-green-darker   rounded' 
    : ' hover:text-green-darker  hover:bg-transparent bg-green-lighter font-body lg:py-4 lg:px-6 sm:py-4 sm:px-6  s:py-2 s:px-2 text-green-darker rounded']">
                
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


