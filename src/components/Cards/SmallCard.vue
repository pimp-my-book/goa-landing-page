<template>
<div class= "shadow-lg lg:w-700 lg:h-490 s:w-4/5 rounded-lg x:w-screen lg:mr-10">
  <img 
  class="mt-5"
  :src="img"
  alt="money"
   />
  <div>
   <DisplaySmall 
   class="mt-5 text-blue-dark"
   :text="cardTitle"
   />
  </div>
  <div>
   <FeatureText
   class="mt-5 p-3 xl:text-2xl"
   :text="cardText"
   small
   />

  </div>
</div>
</template>

<script>
import DisplaySmall from "../Typography/DisplaySmall"
import FeatureText from "../Typography/FeatureText"

export default {
    name: 'SmallCard',
    components:{
    DisplaySmall,
    FeatureText
    },
    props: {
        img: String,
        cardTitle: String,
        cardText: String
    }
}
</script>

<style>



</style>

