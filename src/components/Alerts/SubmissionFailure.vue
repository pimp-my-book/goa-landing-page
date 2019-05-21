<template>
<div class="container mx-auto my-auto pt-20">
<DisplayLarge
        text="Whoops! Something is not working. Check back in a bit and try a again."
        class="text-black mb-5"
        />
         <img
        src="https://s3.amazonaws.com/goa-assets/Illustrations/undraw_feeling_blue_4b7q.svg"
        alt="failure image"
        class="w-img h-img"
        />
</div>
    
</template>
<script>
import DisplayLarge from '../Typography/DisplayLarge'

export default {
    name: 'SubmissionFailure',
     components: {
        DisplayLarge
    }
}
</script>
