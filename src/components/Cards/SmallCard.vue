<template>
<div class="max-w-sm overflow-hidden shadow-lg w-1/4 rounded">
  <img class="" />
  <div>
   <DisplaySmall :text="cardTitle"/>
  </div>
  <div>
   <FeatureText
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
    DisplaySmall
    },
    props: {
        img: String,
        cardTitle: String,
        cardText: String
    }
}
</script>
