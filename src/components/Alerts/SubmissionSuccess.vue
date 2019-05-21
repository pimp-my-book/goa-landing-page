<template>
    <div class="container mx-auto my-auto pt-20">
        <DisplayLarge
        text="Thanks! Someone will get in touch with you!"
        class="text-black mb-5"
        />
        <img
        src="https://s3.amazonaws.com/goa-assets/Illustrations/undraw_happy_feeling_slmw.svg"
        alt="success image"
        class="w-img h-img"
        />
    </div>
</template>
<script>
import DisplayLarge from '../Typography/DisplayLarge'

export default {
    name: 'SubmissionSuccess',
    components: {
        DisplayLarge
    }
}
</script>

