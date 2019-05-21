<template>
<div class="container mx-auto my-auto pt-20">
<DisplayLarge
        text="Whatever you are looking is not here."
        class="text-black mb-5"
        />
         <img
        src="https://s3.amazonaws.com/goa-assets/Illustrations/undraw_page_not_found_su7k.svg"
        alt="failure image"
        class="w-img h-img"
        />
</div>
    
    
</template>
<script>
import DisplayLarge from '../Typography/DisplayLarge'

export default {
    name:'NotFound',
    components:{
        DisplayLarge
    }
}
</script>
