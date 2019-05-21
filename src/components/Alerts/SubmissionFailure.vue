<template>
<div class="container mx-auto my-auto pt-20">
<DisplayLarge
        text="Whoops! Something is not working"
        class="text-black mb-5"
        />
         <img
        src="https://s3.amazonaws.com/goa-assets/Illustrations/undraw_happy_feeling_slmw.svg"
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
