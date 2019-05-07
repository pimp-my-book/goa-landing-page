<template>
<div class= "shadow-lg Card rounded-lg mr-10">
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
   class="mt-5"
   :text="cardText"
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
.Card{
    width: 320px;
    height: 300px;
}
</style>

