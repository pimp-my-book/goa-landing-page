<template>
    <header>
     <DisplayXLarge
     text="Sell Back your products"
     />
     <FeatureText
     text="Products such as textbooks are normally only used for a particular course in a semester. We are able to manage on your behalf the collection and resale of those books. We will first try to re-supply them to your own students and then we will sell them through our partner vendor Pimp My Book."
     />
    </header>
</template>
<script>
import DisplayXLarge from "../Typography/DisplayXLarge"
import FeatureText from "../Typography/FeatureText"

export default {
    name:'BuyBackHeader',
    components:{
        DisplayXLarge,
        FeatureText
    }
}
</script>
<style scoped>

</style>

