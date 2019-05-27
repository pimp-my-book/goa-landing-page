<template>
    <button 
    type="submit"
    url
    @click="forward"
    :class="[regular ? ' bg-green hover:text-green-dark hover:bg-green-lighter font-body py-2 px-4  text-white rounded' 
    : 'bg-green   hover:text-green-dark hover:bg-green-lighter font-body py-4 px-6 sl:py-4 sl:px-6 s:py-2 s:px-2 text-white rounded']">
    
     
     {{text}}
 
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
    methods:{
         forward(){
             this.$router.push(this.url)
         }
    }
   
}
</script>

