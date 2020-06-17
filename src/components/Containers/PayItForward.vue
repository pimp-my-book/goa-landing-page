<template>
    <div id="pay-it-forward-container">
        <DisplaySmall text="If you can't Pay It Back, Pay It Forward" class="p-2 mt-5 mb-5 text-left text-blue-dark" />
        <img id="pay-it-forward-head-image" src="https://ask-thuto-assets.s3.amazonaws.com/home/pay-it-forward/head.jpg" alt="pay-it-forward"/>
        <p class="text-xl text-center mt-5">
            Your students get so much from you, give them an opportunity to give back. We take back the used textbooks that your students no longer need. We either resupply them to your own students who need them or sell them on your behalf. Your students can help you to help more students. 
        </p>
    </div>
</template>

<script>
import DisplaySmall from "../Typography/DisplaySmall";

export default {
    name: "PayItForward",
    components: {
        DisplaySmall
    }
}
</script>

<style>
    #pay-it-forward-head-image {
        filter: blur(2px);
    }
</style>