<template>
    <header

    >
     <DisplayLarge
     class="mt-10 xl:text-3xl"
     text="Sell Back your books"
     />
     <img
     class="h-250"
     src='https://goa-assets.s3.amazonaws.com/Illustrations/undraw_make_it_rain_iwk4.svg'
     />
     <FeatureText
     class="p-10 xl:text-2xl"
     text="Products such as textbooks are normally only used for a particular course in a semester. We are able to manage on your behalf the collection and resale of those books. We will first try to re-supply them to your own students and then we will sell them through our partner vendor Pimp My Book."
     />

     
    </header>
</template>
<script>
import DisplayLarge from "../Typography/DisplayLarge"
import FeatureText from "../Typography/FeatureText"

export default {
    name:'BuyBackHeader',
    components:{
        DisplayLarge,
        FeatureText
    }
}
</script>
<style scoped>

</style>

